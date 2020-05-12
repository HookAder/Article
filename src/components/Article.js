import React from 'react';
import {StyleSheet, Dimensions, View, Text, Image} from 'react-native';

const Article = ({title, url, to}) => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title} onPress={() => to()}>
        {title}
      </Text>
      {/* <Button title="测试数据" onPress={mockArticleData} /> */}
      <Image
        style={{flex: 1}}
        source={{
          uri: url,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    width: Dimensions.get('window').width,
    height: 220,
    backgroundColor: '#eee',
    marginBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#ccc',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  title: {
    textAlign: 'left',
    height: 50,
    fontSize: 30,
    lineHeight: 50,
    backgroundColor: '#fff',
  },
});

export default Article;
