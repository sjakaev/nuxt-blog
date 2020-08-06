<template>
    <div class="error">
        <div class="error__content">
            <h1 class="error__title">Ошибка 404</h1>
            <n-link to="/">Вернуться на главную</n-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .error {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;

        &__content {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 4rem;
        }

        &__title {
            color: #bb2424;
            margin-bottom: 1rem;
        }
    }
</style>
