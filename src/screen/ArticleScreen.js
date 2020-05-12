import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
  ToastAndroid,
} from 'react-native';
import {mockArticleData} from '../mock/index';
import Article from '../components/Article';

const ArticleScreen = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [articleData, setArticle] = useState(mockArticleData());
  // 下拉刷新
  const onRefresh = useCallback(() => {
    // setRefreshing(true);
    setRefreshing(false);
    // 重置新文章
    // setArticle(mockArticleData());

    // get new article mock data
    const article = mockArticleData();
    const oldArticleLen = articleData.articles.length;
    const newArticleLen = article.articles.length;
    console.log('old', oldArticleLen);
    console.log('new', newArticleLen);
    if (newArticleLen >= oldArticleLen) {
      setArticle(article);
      const len = newArticleLen - oldArticleLen;
      console.log(`新增${len}条文章`);
      ToastAndroid.showWithGravity(
        `新增${len}条文章`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    } else {
      setArticle(article);
      console.log(`刷新成功`);
      ToastAndroid.showWithGravity(
        `刷新成功`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }

    // const random = Math.floor(Math.random() * 10 + 1);
    // console.log(random);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articleData, onRefresh]);
  return (
    <View style={styles.layout}>
      {/* <Text style={styles.title}>Hello Article</Text> */}
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {articleData.articles.map((article, index) => (
          <Article
            key={index}
            to={() =>
              navigation.navigate('Details', {
                title: article.title,
                imgUrl: article.imgUrl,
                content: article.content,
              })
            }
            title={article.title}
            url={article.imgUrl}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ArticleScreen;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 40,
  },
});
