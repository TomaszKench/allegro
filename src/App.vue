<template>
    <div class="app">
        <div
            class="app__form-wrapper"
            :class="{'app__form-wrapper--to-top': formToTop}"
        >
            <FormSearch
                class="app__form"
                @submit="fetchRepositories"
            />
        </div>
        <transition name="app__show-transition">
            <RepositoriesList
                v-show="showList"
                class="app__repositories-list"
                :repositories="repositories"
            />
        </transition>
        <transition name="app__show-transition">
            <p
                v-show="showAppFailMessage"
                class="app__message"
            >
                {{  translate('APP_FAIL_MESSAGE') }}
            </p>
        </transition>
        <transition name="app__show-transition">
            <p
                v-show="showAppFailMessage"
                class="app__message"
            >
                {{  translate('APP_FAIL_MESSAGE') }}
            </p>
        </transition>
        <transition name="app__show-transition">
            <span
                v-show="showRateLimitMessage"
                class="app__message"
            >
                <p>{{  translate('API_FAIL_RATE_LIMIT') }}</p>
                <p>{{ parsedRequestLimitReset }}</p>
            </span>
        </transition>
        <transition name="app__show-transition">
            <p
                v-show="showEmptyListMessage"
                class="app__message"
            >
                {{  translate('NO_REPOSITORIES') }}
            </p>
        </transition>
        <transition name="app__show-transition">
            <p
                v-show="showUserFailMessage"
                class="app__message"
            >
                {{ translate('NO_USER')}}
            </p>
        </transition>
        <transition name="app__show-transition">
            <div
                v-show="showLoadingSpin"
                class=" app__loading-spin-wrapper"
            >
                <div class="loading-spin"></div>
            </div>
        </transition>
    </div>
</template>

<script>
import Vue from 'vue';
import FormSearch from './components/FormSearch';
import RepositoriesList from './components/RepositoriesList';
export default {
    name: 'App',

    components: {
        FormSearch, RepositoriesList
    },

    data() {
        return {
            repositories: [],
            requestStatus: null,
            allowSendRequest: true,
            appStatus: 1,
            rateLimitResetTimeLeft: null,
            rateLimitResetInterval: null,
            appStatusValues: Object.freeze({
                START: 1,
                WAIT_FOR_RESULT: 2,
                SHOW_RESULT: 3,
            })
        }
    },

    computed: {
        formToTop() {
            return this.appStatus != this.appStatusValues.START;
        },
        showAppFailMessage() {
            return this.appStatus == this.appStatusValues.SHOW_RESULT && ([0, 400, 422].includes(this.requestStatus) || this.requestStatus >= 500);
        },
        showUserFailMessage() {
            return this.appStatus == this.appStatusValues.SHOW_RESULT && this.requestStatus == 404;
        },
        showRateLimitMessage() {
            return this.appStatus == this.appStatusValues.SHOW_RESULT && this.requestStatus == 403;
        },
        showLoadingSpin() {
            return this.appStatus == this.appStatusValues.WAIT_FOR_RESULT;
        },
        showEmptyListMessage() {
            return this.appStatus == this.appStatusValues.SHOW_RESULT && (this.requestStatus >= 200 && this.requestStatus < 400) && this.repositories.length == 0;
        },
        showList() {
            return this.appStatus == this.appStatusValues.SHOW_RESULT && (this.requestStatus >= 200 && this.requestStatus < 400) && this.repositories.length > 0;
        },
        parsedRequestLimitReset() {
            return new Date(this.rateLimitResetTimeLeft * 1000).toISOString().substr(11, 8);
        }
    },

    methods: {
        fetchRepositories(username) {
            if (this.allowSendRequest) {
                this.appStatus = this.appStatusValues.WAIT_FOR_RESULT;
                this.sendRequest(username).then((xhr) => {
                    this.requestStatus = xhr.status;
                    this.setRepositories(xhr.response);
                    this.sortRepositoriesByStars();
                }).catch((xhr) => {
                    this.handleError(xhr);
                }).finally(() => {
                    this.appStatus = this.appStatusValues.SHOW_RESULT;
                })
            }
        },
        handleError(xhr) {
            this.requestStatus = xhr.status;
            if (xhr.status == 403) {
                this.handleRateLimitError(xhr);
            }
        },
        handleRateLimitError(xhr) {
            this.allowSendRequest = false;
            let rateLimitReset = xhr.getResponseHeader('x-ratelimit-reset') - Math.round(new Date().getTime() / 1000);
            this.rateLimitResetTimeLeft = rateLimitReset;
            setTimeout(() => {
                clearInterval(this.rateLimitResetInterval);
                this.resetApp();
            }, rateLimitReset * 1000);
            this.rateLimitResetInterval = setInterval(() => {
                this.rateLimitResetTimeLeft--;
            }, 1000);
        },
        resetApp() {
            this.repositories = [];
            this.requestStatus = null;
            this.allowSendRequest = true;
            this.appStatus = this.appStatusValues.START;
            this.rateLimitResetTimeLeft = null;
        },
        sortRepositoriesByStars() {
            this.repositories.sort((a, b) => (a.stargazers_count < b.stargazers_count) ? 1 : -1);
        },
        setRepositories(response) {
            this.repositories = this.parseResponse(response);
        },
        parseResponse(response) {
            return JSON.parse(response);
        },
        async sendRequest(username) {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', Vue.endpoint('API_GET_REPOS_BY_USERNAME_ENDPOINT', {
                    username: username
                }));
                xhr.setRequestHeader("Accept", "application/vnd.github.v3+json");
                xhr.onreadystatechange = () => {
                    if (xhr.readyState == XMLHttpRequest.DONE) {
                        if (xhr.status >= 200 && xhr.status < 400) {
                            resolve(xhr);
                        }
                        reject(xhr);
                    }
                }
                xhr.send();
            });
        },

    }
}
</script>

<style lang="scss">
.app {
    $x-small-padding: 20px;

    $form-wrapper-height: 150px;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 30px;
    padding: 0 $x-small-padding;

    @include min-width("medium") {
        width: 730px;
        margin-left: auto;
        margin-right: auto;
    }

    &__form-wrapper {
        transition-property: transform, top;
        transition-duration: $show-list-transition-duration;
        transition-timing-function: linear;
        background-color: $background-color;
        background: linear-gradient(
            180deg,
            $background-color 0%,
            $background-color 90%,
            transparentize($background-color, 1) 100%
        );
        width: 100%;
        padding: 0 $x-small-padding;
        position: fixed;
        z-index: 5;
        top: 50%;
        left: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translate(-50%, -50%);
        height: $form-wrapper-height;
        @include min-width("medium") {
            width: 730px;
        }
        &--to-top {
            top: 0;
            transform: translate(-50%, 0);
        }
    }
    &__form {
        width: 100%;
    }
    &__repositories-list {
        position: relative;
        top: $form-wrapper-height;
        padding-bottom: 25px;
    }
    &__message {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: map-get($font-colors, "error");
        font-size: map-get($font-sizes, "large");
        text-align: center;
        padding: 0 $x-small-padding;
        width: 100%;
    }
    &__loading-spin-wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__show-transition {
        &-enter,
        &-leave-to {
            opacity: 0;
        }
        &-enter-active,
        &-leave-active {
            transition: opacity $show-list-transition-duration linear;
        }
        &-enter-to,
        &-leave {
            opacity: 1;
        }
    }
}
</style>
