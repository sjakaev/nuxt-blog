<template>
    <article class="post">
        <header
            class="post__header"
        >
            <div class="post__title">
                <h1>Post title</h1>
                <n-link to="/">
                    <i class="el-icon-back"></i>
                </n-link>
            </div>
            <div class="post__info">
                <small>
                    <i class="el-icon-time"></i>
                    {{ new Date().toLocaleString() }}
                </small>

                <small>
                    <i class="el-icon-view"></i>
                    42
                </small>
            </div>
            <div
                class="post__img"
            >
                <img
                    src="https://pix6.agoda.net/geo/city/318/1_318_02.jpg?s=1920x822"
                    alt="image"
                >
            </div>
        </header>
        <main class="post__content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Animi eum impedit itaque neque obcaecati odio
                perferendis perspiciatis sed velit vitae.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Animi eum impedit itaque neque obcaecati odio
                perferendis perspiciatis sed velit vitae.
            </p>
        </main>
        <footer>
        <app-comment-form
            v-if="canAddComment"
            @created="createCommentHandler"
        />

        <div class="comments" v-if="true">
            <app-comment
                v-for="comment in 4"
                :key="comment"
                comment="comment"
            />
        </div>

        <div class="text-center" v-else>
            Комментариев нет
        </div>

        </footer>
    </article>
</template>

<script>
import AppComment from '@/components/main/Comment'
import AppCommentForm from '@/components/main/CommentForm'
    export default {
        validate({params}) {
            return Boolean(params.id)
        },
        components: {
            AppComment,
            AppCommentForm,
        },
        data() {
            return {
                canAddComment: true,
            }
        },
        methods: {
            createCommentHandler() {
                this.canAddComment = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
.post {
    max-width: 600px;
    margin: 0 auto;

    &__header {
        margin-bottom: 1.5rem;
    }

    &__content {
        margin-bottom: 2rem;
    }

    &__title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    &__info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: .5rem;
    }

    &__img img {
        width: 100%;
        max-width: 600px;
        height: auto;
    }
}
</style>
