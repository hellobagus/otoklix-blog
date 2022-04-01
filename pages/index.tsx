import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';

import { State, IndexPageProps } from '../interfaces';
import { getResource, deleteResourceItem } from '../actions/actions';

import Layout from '../components/Layout';
import PostsList from '../components/PostsList';

const IndexPage: FC<IndexPageProps> = ({
  posts,
  getResource,
  deleteResourceItem,
}) => {
  useEffect(() => {
    getResource();
  }, []);

  return (
    <Layout title="Otoklix | DevelopsToday">
      {posts ? (
        <PostsList data={posts} deletePost={deleteResourceItem} />
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  );
};

const mapStateToProps = (state: State) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getResource: () => dispatch(getResource()),
    deleteResourceItem: (id: number) => dispatch(deleteResourceItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
