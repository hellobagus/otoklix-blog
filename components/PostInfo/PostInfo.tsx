import React, { FC, useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import { PostInfoProps } from '../../interfaces';
import {
  NavBar,
  A,
  Section,
  Article,
  H1,
  P,
  ButtonUpdate,
  DivUpdate,
  H3,
  Input,
  Textarea,
  ButtonSend,
  CommentsArticle,
  DivComments,
  H2,
} from './PostInfoStyled';

const PostInfo: FC<PostInfoProps> = ({ post, updatePost, createComments }) => {
  const { id, title, content, comments } = post;

  const [updateStatus, setUpdateStatus] = useState<boolean>(false);
  const [updateTitle, setUpdateTitle] = useState<string>('');
  const [updateBody, setUpdateBody] = useState<string>('');
  const [commentBody, setCommentBody] = useState<string>('');

  useEffect(() => {
	  setUpdateTitle(title);
	  setUpdateBody(content);
  }, [title, content]);

  const updateData = () => {
    if (updateTitle && updateBody) {
      updatePost(id, updateTitle, updateBody);
      setUpdateTitle('');
      setUpdateBody('');
      setUpdateStatus(false);
    }
  };

  const sendData = () => {
    if (commentBody) {
      createComments(id, commentBody);
      setCommentBody('');
    }
  };

  return (
    <Fragment>
      <NavBar>
        <Link href="/">
          <A>Back</A>
        </Link>
      </NavBar>
      <Section key={id}>
        <Article>
          <H1>{title}</H1>
          <P>{content}</P>
        </Article>
        <ButtonUpdate
          onClick={() => setUpdateStatus((value: boolean) => !value)}
        >
          Update post
        </ButtonUpdate>
        {updateStatus ? (
          <DivUpdate>
            <H3>New post heading:</H3>
            <Input
              type="text"
              value={updateTitle}
              onChange={(event) => setUpdateTitle(event.target.value)}
            />
            <H3>New post text:</H3>
            <Textarea
              value={updateBody}
              onChange={(event) => setUpdateBody(event.target.value)}
            />
            <br />
            <ButtonSend onClick={updateData}>Send new data</ButtonSend>
          </DivUpdate>
        ) : null}
        {comments
          ? comments.map((comment: any) => {
              return (
                <CommentsArticle key={comment.id}>
                  <H3>Comment {comment.id}:</H3>
                  <P>{comment.body}</P>
                </CommentsArticle>
              );
            })
          : null}
        <DivComments>
          <H2>Type your comment below:</H2>
          <Textarea
            value={commentBody}
            onChange={(event) => setCommentBody(event.target.value)}
          />
          <br />
          <ButtonSend onClick={sendData}>Send</ButtonSend>
        </DivComments>
      </Section>
    </Fragment>
  );
};

export default PostInfo;
