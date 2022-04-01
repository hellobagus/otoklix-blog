import React, { FC } from 'react';
import Link from 'next/link';
import { PostItemProps } from '../../interfaces';
import { Article, Div, Button, A, H2, P } from './PostItemStyled';

const PostItem: FC<PostItemProps> = ({ post, deletePost }) => {
  const { id, title, content } = post;

  const deleteData = () => {
    deletePost(id);
  };

  return (
    <Article>
      <Div>
        <Button onClick={deleteData}>delete</Button>
      </Div>
      <Link href={`/posts/${id}`}>
        <A>
          <H2>{title}</H2>
          <P>{content}</P>
        </A>
      </Link>
    </Article>
  );
};

export default PostItem;
