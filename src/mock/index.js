import Mock from 'mockjs';

// mock articles data list
export const mockArticleData = () => {
  const articles = Mock.mock({
    'articles|5-20': [
      {
        'id|+1': 0,
        title: '@ctitle(5,8)',
        imgUrl: Mock.Random.image('200x200', '#4da6ff', 'Mock Title'),
        content: '@ctitle(20)',
      },
    ],
  });
  return articles;
};

// mock random chinese name
export const mockChineseName = () => {
  const chinese = Mock.mock({
    name: '@cname()',
  });
  return chinese;
};
// mock random english name
export const mockEnglishName = () => {
  const EnglishName = Mock.mock({
    name: '@name()',
  });
  return EnglishName;
};
// mock random english title
export const mockEnglishTitle = () => {
  const EnglishTitle = Mock.mock({
    name: '@title()',
  });
  return EnglishTitle;
};

// mock url
export const mockUrl = () => {
  const url = Mock.mock({
    name: '@url("https")',
  });
  return url;
};
