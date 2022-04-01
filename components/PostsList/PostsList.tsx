import React, { FC } from 'react';
import { PostsListProps, Post } from '../../interfaces';
import { Section } from './PostsListStyled';
import PostItem from '../PostItem';

const PostsList: FC<PostsListProps> = ({ data, deletePost }) => {
  return (
    <Section>
      {data.map((post: Post) => (
        <PostItem key={post.id} post={post} deletePost={deletePost} />
      ))}
    </Section>
  );
};

export default PostsList;
