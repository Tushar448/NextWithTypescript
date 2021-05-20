import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import withReduxSaga from 'next-redux-saga';
import withRedux from 'next-redux-wrapper';
import { Store } from 'redux';
import { configureStore } from '../src/redux/store';

class ShopPlus extends App<{ pageProps: any; store: Store }> {
  componentDidMount() {
    let comment = document.createComment(`Grohe web app`);
    document.insertBefore(comment, document.documentElement);
  }

  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <React.Fragment>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <title>ShopPlus</title>
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </React.Fragment>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(ShopPlus));
