<template>
    <el-card
        shadow="hover"
        :body-style="{padding: 0}"
        class="post"
    >
        <header
            slot="header"
            class="post__header"
        >
            <h3>
                Post title
            </h3>
            <small>
                <i class="el-icon-time"></i>
                {{ new Date().toLocaleString() }}
            </small>
        </header>

        <div
            class="post__body"
        >
            <img
                src="https://pix6.agoda.net/geo/city/318/1_318_02.jpg?s=1920x822"
                class="post__img"
                alt="post"
            >
        </div>
        <footer class="post__footer">
            <el-button
                round
                @click="openPost"
            >
                Открыть
            </el-button>

            <span>
                <i class="el-icon-chat-dot-square">
                    12
                </i>
            </span>
        </footer>
    </el-card>
</template>

<script>
    export default {
        methods: {
            openPost() {
                const id = 1;
                this.$router.push(`/post/${id}`);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .post {
        margin-bottom: 1.5rem;


        &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__img {
            width: 100%;
            height: auto;
        }

        &__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
        }
    }
</style>
