/**
   * 封装获取电影详细信息的函数，
   * 将导演，主演从数组中取出并拼接成一个字符串
   */
function processSubject(subject) {
  // 获取电影名称
  var title = subject.title;
  // 获取导演数组中的信息
  var directors = subject.directors;
  //定义一个空的字符串用来存储处理后的结果
  var directorsStr = "";
  for (var index in directors) {
    directorsStr = directorsStr + directors[index].name + " / ";
  }
  // 去除凭借完成后字符串的最后的空格和斜线
  if (directorsStr != "") {
    directorsStr = directorsStr.substring(0, directorsStr.length - 2);
  }
  // 同理，演员数组也可以这样处理
  var casts = subject.casts;
  var castStr = "";
  for (var index in casts) {
    castStr = castStr + casts[index].name + " / ";
  }
  if (castStr != "") {
    castStr = castStr.substring(0, castStr.length - 2);
  }
  // 同理，电影类型也可以这样处理
  var genres = subject.genres;
  var genresStr = "";
  for (var index in genres) {
    genresStr = genresStr + genres[index] + " / ";
  }
  if (genresStr != "") {
    genresStr = genresStr.substring(0, genresStr.length - 2);
  }
  var year = subject.year;
  // 最后将获取到的电影信息拼接成一个串，并将其赋值给当前电影，这是js 的特性
  var text = "名称: " + title + "\n导演：" + directorsStr + "\n主演：" + castStr + "\n类型：" + genresStr + "\n上映年份：" + year + "(中国大陆)";
  subject.text = text;
}

/**
 * 封装获取每一个电影信息的函数
 * 这是一种比较好的编程规范
 */
function processSubjects(subjects) {
  for (var i = 0; i < subjects.length; i++) {
    var subject = subjects[i];
    this.processSubject(subject);
  }
}
// 将封装好的模块暴露给外界
module.exports = {
  processSubject:processSubject,
  processSubjects: processSubjects
}
