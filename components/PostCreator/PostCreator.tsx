import React, { FC, useState, useEffect } from 'react';
import { PostCreatorProps } from '../../interfaces';
import {
  Section,
  Form,
  P,
  H3,
  Input,
  Textarea,
  Button,
} from './PostCreatorStyled';

const PostCreator: FC<PostCreatorProps> = ({ createPost }) => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    let timeOut: any;

    visible ? (timeOut = setTimeout(() => setVisible(false), 4000)) : null;

    return () => clearTimeout(timeOut);
  });

  const sendData = () => {
    if (title && body) {
      createPost(title, body);
      setTitle('');
      setBody('');
      setVisible(true);
    }
  };

  return (
    <Section>
      <Form>
        {visible ? <P>The post was created</P> : null}
        <H3>Post heading:</H3>
        <Input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <H3>Post text:</H3>
        <Textarea
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
        <br />
        <Button onClick={sendData}>Send</Button>
      </Form>
      <br />
    </Section>
  );
};

export default PostCreator;
