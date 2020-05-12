import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  Clipboard,
  ToastAndroid,
  View,
  Text,
} from 'react-native';
import {Button as AntButton} from '@ant-design/react-native';
import {
  mockChineseName,
  mockEnglishName,
  mockEnglishTitle,
  mockUrl,
} from '../mock/index';

const ToolScreen = () => {
  const [chineseName, setChinese] = useState(mockChineseName());
  const [englishName, setEnglish] = useState(mockEnglishName());
  const [englishTitle, setTitle] = useState(mockEnglishTitle());
  const [url, setUrl] = useState(mockUrl());

  // 设置剪切板的文字
  const copyToClipboard = name => {
    console.log(name);
    Clipboard.setString(name);
    ToastAndroid.showWithGravity(
      `成功复制"${name}"到剪切板`,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
  };

  return (
    <View style={styles.layout}>
      <View style={styles.wrap}>
        <AntButton type="primary" onPress={() => setChinese(mockChineseName())}>
          生成随机中文姓名
        </AntButton>
      </View>
      <View style={styles.wrap}>
        <AntButton type="primary" onPress={() => setEnglish(mockEnglishName())}>
          生成随机英文姓名
        </AntButton>
      </View>
      <View style={styles.wrap}>
        <AntButton type="primary" onPress={() => setTitle(mockEnglishTitle())}>
          生成随机英文标题
        </AntButton>
      </View>
      <View style={styles.wrap}>
        <AntButton type="primary" onPress={() => setUrl(mockUrl())}>
          生成假链接
        </AntButton>
      </View>
      {/* <View style={styles.response}>
        <TextInput style={styles.text} value="123" editable={false} />
      </View> */}
      <View style={styles.textWrap}>
        <Text
          style={styles.title}
          onPress={() => copyToClipboard(chineseName.name)}>
          {chineseName.name}
        </Text>
        <Text
          style={styles.title}
          onPress={() => copyToClipboard(englishName.name)}>
          {englishName.name}
        </Text>
        <Text
          style={styles.title}
          onPress={() => copyToClipboard(englishTitle.name)}>
          {englishTitle.name}
        </Text>
        <Text style={styles.title} onPress={() => copyToClipboard(url.name)}>
          {url.name}
        </Text>
      </View>
    </View>
  );
};

export default ToolScreen;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  wrap: {
    marginTop: 20,
  },
  response: {
    width: Dimensions.get('window').width,
    height: 200,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
  },
  textWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    marginTop: 10,
    backgroundColor: '#fff',
  },
});
