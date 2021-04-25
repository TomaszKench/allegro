<template>
    <table class="repositories-list">
        <thead class="repositories-list__thead">
            <td class="repositories-list__head-name-td">{{ translate('REPOSITORIES_LIST_NAME_HEADER') }}</td>
            <td class="repositories-list__head-stars-td">{{translate('REPOSITORIES_LIST_STARS_HEADER')}}</td>
        </thead>
        <tr
            v-for="repository in repositories"
            :key="repository.id"
            class="repositories-list__content-tr"
        >
            <td class="repositories-list__name-td">
                <a
                    class="repositories-list__a"
                    :href="repository.html_url"
                    target="_blank"
                >{{repository.name}}</a>
            </td>
            <td class="repositories-list__star-td">
                {{repository.stargazers_count}}
            </td>
        </tr>
    </table>
</template>
<script>
import Vue from 'vue';
export default {
    name: 'RepositoriesList',

    props: {
        repositories: {
            type: Array,
            default() {
                return [];
            },
            validator(repositories) {
                return repositories.every((repository) => {
                    return Vue.hasEveryProperties(repository, ['id', 'name', 'html_url', 'stargazers_count']);
                })
            }
        }
    },

}
</script>
<style lang="scss">
.repositories-list {
    color: map-get($font-colors, "main");
    table-layout: fixed;
    width: 100%;
    &__thead {
        font-size: map-get($font-sizes, "large");
    }
    &__head-stars-td {
        width: 30%;
        text-align: right;
    }
    &__head-name-td {
        width: 70%;
    }
    &__name-td {
        padding-right: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-bottom: 10px;
    }
    &__star-td {
        text-align: right;
    }
    &__a {
        text-decoration: none;
        &,
        &:visited {
            color: map-get($font-colors, "main");
        }
        &:hover {
            color: map-get($font-colors, "focus");
        }
    }
}
</style>