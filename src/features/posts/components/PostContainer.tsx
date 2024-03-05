import Container from '@mui/material/Container'
import React from 'react'

import { PostForm } from 'features/posts/components/PostForm'
import { PostList } from 'features/posts/components/PostList'
import { usePostService } from 'features/posts/hooks/usePostService'

import { Post } from '../types'

export const PostContainer = () => {
  const [postsState, setPostsState] = React.useState<Post[]>([])

  const { posts, deletePost, updatePost, fetchAllPosts, createPost } = usePostService()

  React.useEffect(() => {
    setPostsState(posts)
  }, [posts])

  React.useEffect(() => {
    fetchAllPosts()
  }, [fetchAllPosts])

  return (
    <>
      <Container maxWidth="xs">
        <PostForm onSubmitClick={createPost} />
      </Container>
      <Container sx={{ py: 4 }} maxWidth="md">
        <PostList posts={postsState} onDeletePost={deletePost} onUpdatePost={updatePost} />
      </Container>
    </>
  )
}
