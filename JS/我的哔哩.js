/* 直播弹幕 -> vod_area:'bilidanmu'
目前只有皮皮虾大佬的DMBox, 支持弹幕
DMBox下载:https://t.me/pipixiawerun
设置 > 窗口预览 > 开启
*/

/* Cookie设置
Cookie获取方法 https://github.com/UndCover/PyramidStore/blob/main/list.md#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9
Cookie设置方法1: DR-PY 后台管理界面
CMS后台管理 > 设置中心 > 环境变量 > {"bili_cookie":"XXXXXXX","vmid":"XXXXXX"} > 保存
Cookie设置方法2: 手动替换Cookie
底下代码 headers的
"Cookie":"$bili_cookie"
手动替换为
"Cookie":"将获取的Cookie黏贴在这"
*/

var rule = {
    title:'我的哔哩',
    host:'https://api.bilibili.com',
    homeUrl:'/x/web-interface/search/type?search_type=video&keyword=小姐姐4K&page=1',
    url:'/x/web-interface/search/type?search_type=videofyfilter',
    class_name:'帕梅拉&太极拳&健身&舞蹈&音乐&歌曲&MV&演唱会&白噪音&知名UP主&说案&解说&演讲&探索发现&纪录片&平面设计教学&软件教程&实用教程&旅游&风景&食谱&美食&搞笑&球星&动物世界&相声小品&戏曲&儿童&小姐姐&荒野求生',
    class_url:'帕梅拉&太极拳&健身&舞蹈&音乐&歌曲&MV4K&演唱会4K&白噪音4K&知名UP主&说案&解说&演讲&探索发现超清&纪录片超清&平面设计教学&软件教程&实用教程&旅游&风景4K&食谱&美食超清&搞笑&球星&动物世界超清&相声小品&戏曲&儿童&小姐姐4K&荒野求生超清',
    filterable: 1,
    filter_url: '&keyword={{fl.tid}}&page=fypage&duration={{fl.duration}}&order={{fl.order}}',
    filter_def:{
        帕梅拉:{tid:'帕梅拉'},
        太极拳:{tid:'太极拳'},
        健身:{tid:'健身'},
        舞蹈:{tid:'舞蹈'},
        音乐:{tid:'音乐'},
        歌曲:{tid:'歌曲'},
        MV4K:{tid:'MV4K'},
        演唱会4K:{tid:'演唱会4K'},
        白噪音4K:{tid:'白噪音4K'},
        知名UP主:{tid:'知名UP主'},
        说案:{tid:'说案'},
        解说:{tid:'解说'},
        演讲:{tid:'演讲'},
        探索发现超清:{tid:'探索发现超清'},
        纪录片超清:{tid:'纪录片超清'},
        平面设计教学:{tid:'平面设计教学'},
        软件教程:{tid:'软件教程'},
        实用教程:{tid:'实用教程'},
        旅游:{tid:'旅游'},
        风景4K:{tid:'风景4K'},
        食谱:{tid:'食谱'},
        美食超清:{tid:'美食超清'},
        搞笑:{tid:'搞笑'},
        球星:{tid:'球星'},
        动物世界超清:{tid:'动物世界超清'},
        相声小品:{tid:'相声小品'},
        戏曲:{tid:'戏曲'},
        儿童:{tid:'儿童'},
        小姐姐4K:{tid:'小姐姐4K'},
        荒野求生超清:{tid:'荒野求生超清'}
    },
    filter: {
        "小姐姐4K":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"小姐姐4K"},{"n":"比基尼","v":"比基尼美女4K"},{"n":"内衣","v":"内衣模特4K"},{"n":"车模","v":"美女车模4K"},{"n":"健身","v":"美女健身4K"},{"n":"翻唱","v":"美女翻唱4K"},{"n":"舞蹈","v":"美女舞蹈4K"},{"n":"美妆","v":"美女美妆4K"},{"n":"Cos","v":"美女Cos4K"},{"n":"户外","v":"美女户外4K"},{"n":"居家","v":"美女居家4K"},{"n":"自习","v":"自习小姐姐4K"},{"n":"职场","v":"职场美女4K"},{"n":"工地","v":"工地美女4K"},{"n":"安静","v":"安静小姐姐4K"},{"n":"活泼","v":"活泼小姐姐4K"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "探索发现超清":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "纪录片超清":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "儿童":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"儿童"},{"n":"教育","v":"儿童早教"},{"n":"歌曲","v":"贝瓦儿歌"},{"n":"舞蹈","v":"儿童舞蹈"},{"n":"成语故事","v":"儿童成语故事"},{"n":"安全教育","v":"儿童安全教育"},{"n":"睡前故事","v":"儿童睡前故事"},{"n":"贝乐虎","v":"贝乐虎"},{"n":"宝宝巴士","v":"宝宝巴士"},{"n":"儿童好声音","v":"儿童好声音"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "动物世界超清":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "实用教程":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"实用教程"},{"n":"水电维修","v":"水电维修"},{"n":"装修","v":"装修"},{"n":"生活小技巧","v":"生活小技巧"},{"n":"绿植","v":"绿植"},{"n":"宠物","v":"宠物"},{"n":"汽车","v":"汽车养护"},{"n":"穿衣搭配","v":"穿衣搭配"},{"n":"毛衣编织","v":"毛衣编织"},{"n":"美妆","v":"美妆"},{"n":"数独","v":"数独教程"},{"n":"魔方","v":"魔方教程"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "说案":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"说案"},{"n":"汤圆","v":"汤圆说案"},{"n":"唐唐","v":"唐唐说案"},{"n":"罗翔","v":"罗翔说刑法"},{"n":"何家弘","v":"何家弘说案"},{"n":"韩诺","v":"韩诺说案"},{"n":"老V","v":"老V说案"},{"n":"禁播档案","v":"禁播档案"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "演讲":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"全部演讲4K"},{"n":"A艾跃进","v":"艾跃进演讲4K"},{"n":"C超级演说家","v":"超级演说家4K"},{"n":"D电影","v":"电影演讲4K"},{"n":"D典籍里的中国","v":"典籍里的中国4K"},{"n":"G感动中国","v":"感动中国4K"},{"n":"G郭继承","v":"郭继承演讲4K"},{"n":"H华春莹","v":"华春莹演讲4K"},{"n":"L雷军","v":"雷军演讲4K"},{"n":"L罗翔","v":"罗翔演讲4K"},{"n":"R任正非","v":"任正非演讲4K"},{"n":"TED","v":"TED演讲4K"},{"n":"W汪文斌","v":"汪文斌演讲4K"},{"n":"Y一刻","v":"一刻演讲4K"},{"n":"Z赵立坚","v":"赵立坚演讲4K"},{"n":"Z郑强","v":"郑强演讲4K"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "解说":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"解说"},{"n":"电影","v":"电影解说"},{"n":"电视","v":"电视解说"},{"n":"小说","v":"小说解说"},{"n":"历史","v":"历史解说"},{"n":"动漫","v":"动漫解说"},{"n":"电影","v":"歌词解说"},{"n":"科普","v":"科普"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "风景4K":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"风景4K"},{"n":"A澳门","v":"澳门风景4K"},{"n":"A安徽","v":"安徽风景4K"},{"n":"B布达拉宫","v":"布达拉宫风景4K"},{"n":"B北京","v":"北京风景4K"},{"n":"C重庆","v":"重庆风景4K"},{"n":"C草原","v":"草原风景4K"},{"n":"D大海","v":"大海风景4K"},{"n":"F福建","v":"福建风景4K"},{"n":"G广东","v":"广东风景4K"},{"n":"G广西","v":"广西风景4K"},{"n":"G贵州","v":"贵州风景4K"},{"n":"G甘肃","v":"甘肃风景4K"},{"n":"H海南","v":"海南风景4K"},{"n":"H河北","v":"河北风景4K"},{"n":"H河南","v":"河南风景4K"},{"n":"H湖北","v":"湖北风景4K"},{"n":"H湖南","v":"湖南风景4K"},{"n":"H黑龙江","v":"黑龙江风景4K"},{"n":"J吉林","v":"吉林风景4K"},{"n":"J江苏","v":"江苏风景4K"},{"n":"J江西","v":"江西风景4K"},{"n":"L辽宁","v":"辽宁风景4K"},{"n":"M民宿","v":"民宿风景4K"},{"n":"N内蒙古","v":"内蒙古风景4K"},{"n":"N宁夏","v":"宁夏风景4K"},{"n":"Q青海","v":"青海风景4K"},{"n":"S上海","v":"上海风景4K"},{"n":"S陕西","v":"陕西风景4K"},{"n":"S四川","v":"四川风景4K"},{"n":"S山西","v":"山西风景4K"},{"n":"S山东","v":"山东风景4K"},{"n":"T天津","v":"天津风景4K"},{"n":"T台湾","v":"台湾风景4K"},{"n":"T天空","v":"天空风景4K"},{"n":"X西湖","v":"西湖风景4K"},{"n":"X西藏","v":"西藏风景4K"},{"n":"X新疆","v":"新疆风景4K"},{"n":"X香港","v":"香港风景4K"},{"n":"Y云南","v":"云南风景4K"},{"n":"Z浙江","v":"浙江风景4K"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "MV4K":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"MV4K"},{"n":"A阿杜","v":"阿杜MV4K"},{"n":"A阿黛尔","v":"阿黛尔MV4K"},{"n":"BBeyond","v":"BeyondMV4K"},{"n":"BBy2","v":"By2MV4K"},{"n":"BBIGBANG","v":"BIGBANGMV4K"},{"n":"B布兰妮","v":"布兰妮MV4K"},{"n":"C陈奕迅","v":"陈奕迅MV4K"},{"n":"C蔡依林","v":"蔡依林MV4K"},{"n":"C初音未来","v":"初音未来MV4K"},{"n":"C蔡健雅","v":"蔡健雅MV4K"},{"n":"C陈小春","v":"陈小春MV4K"},{"n":"C草蜢","v":"草蜢MV4K"},{"n":"C陈慧娴","v":"陈慧娴MV4K"},{"n":"C崔健","v":"崔健MV4K"},{"n":"C仓木麻衣","v":"仓木麻衣MV4K"},{"n":"D戴荃","v":"戴荃MV4K"},{"n":"D动力火车","v":"动力火车MV4K"},{"n":"D邓丽君","v":"邓丽君MV4K"},{"n":"D丁当","v":"丁当MV4K"},{"n":"D刀郎","v":"刀郎MV4K"},{"n":"D邓紫棋","v":"邓紫棋MV4K"},{"n":"D戴佩妮","v":"戴佩妮MV4K"},{"n":"D邓丽君","v":"邓丽君MV4K"},{"n":"F飞儿乐队","v":"飞儿乐队MV4K"},{"n":"F费玉清","v":"费玉清MV4K"},{"n":"F费翔","v":"费翔MV4K"},{"n":"F方大同","v":"方大同MV4K"},{"n":"F房东的猫","v":"房东的猫MV4K"},{"n":"F凤飞飞","v":"凤飞飞MV4K"},{"n":"F凤凰传奇","v":"凤凰传奇MV4K"},{"n":"G古风歌曲","v":"古风歌曲4K"},{"n":"G国乐大典","v":"国乐大典4K"},{"n":"G郭采洁","v":"郭采洁MV4K"},{"n":"G光良","v":"光良MV4K"},{"n":"G郭静","v":"郭静MV4K"},{"n":"G郭富城","v":"郭富城MV4K"},{"n":"H胡彦斌","v":"胡彦斌MV4K"},{"n":"H胡夏","v":"胡夏MV4K"},{"n":"H韩红","v":"韩红MV4K"},{"n":"H黄品源","v":"黄品源MV4K"},{"n":"H黄小琥","v":"黄小琥MV4K"},{"n":"H花儿乐队","v":"花儿乐队MV4K"},{"n":"H黄家强","v":"黄家强MV4K"},{"n":"H后街男孩","v":"后街男孩MV4K"},{"n":"J经典老歌","v":"经典老歌4K"},{"n":"J贾斯丁比伯","v":"贾斯丁比伯MV4K"},{"n":"J金池","v":"金池MV4K"},{"n":"J金志文","v":"金志文MV4K"},{"n":"J焦迈奇","v":"焦迈奇MV4K"},{"n":"K筷子兄弟","v":"筷子兄弟MV4K"},{"n":"L李玟","v":"李玟MV4K"},{"n":"L林忆莲","v":"林忆莲MV4K"},{"n":"L李克勤","v":"李克勤MV4K"},{"n":"L刘宪华","v":"刘宪华MV4K"},{"n":"L李圣杰","v":"李圣杰MV4K"},{"n":"L林宥嘉","v":"林宥嘉MV4K"},{"n":"L梁静茹","v":"梁静茹MV4K"},{"n":"L李健","v":"李健MV4K"},{"n":"L林俊杰","v":"林俊杰MV4K"},{"n":"L李玉刚","v":"李玉刚MV4K"},{"n":"L林志炫","v":"林志炫MV4K"},{"n":"L李荣浩","v":"李荣浩MV4K"},{"n":"L李宇春","v":"李宇春MV4K"},{"n":"L洛天依","v":"洛天依MV4K"},{"n":"L林子祥","v":"林子祥MV4K"},{"n":"L李宗盛","v":"李宗盛MV4K"},{"n":"L黎明","v":"黎明MV4K"},{"n":"L刘德华","v":"刘德华MV4K"},{"n":"L罗大佑","v":"罗大佑MV4K"},{"n":"L林肯公园","v":"林肯公园MV4K"},{"n":"LLadyGaga","v":"LadyGagaMV4K"},{"n":"L旅行团乐队","v":"旅行团乐队MV4K"},{"n":"M莫文蔚","v":"莫文蔚MV4K"},{"n":"M毛不易","v":"毛不易MV4K"},{"n":"M梅艳芳","v":"梅艳芳MV4K"},{"n":"M迈克尔杰克逊","v":"迈克尔杰克逊MV4K"},{"n":"N南拳妈妈","v":"南拳妈妈MV4K"},{"n":"P朴树","v":"朴树MV4K"},{"n":"Q齐秦","v":"齐秦MV4K"},{"n":"Q青鸟飞鱼","v":"青鸟飞鱼MV4K"},{"n":"R容祖儿","v":"容祖儿MV4K"},{"n":"R热歌","v":"热歌MV4K"},{"n":"R任贤齐","v":"任贤齐MV4K"},{"n":"S水木年华","v":"水木年华MV4K"},{"n":"S孙燕姿","v":"孙燕姿MV4K"},{"n":"S苏打绿","v":"苏打绿MV4K"},{"n":"SSHE","v":"SHEMV4K"},{"n":"S孙楠","v":"孙楠MV4K"},{"n":"T陶喆","v":"陶喆MV4K"},{"n":"T谭咏麟","v":"谭咏麟MV4K"},{"n":"T田馥甄","v":"田馥甄MV4K"},{"n":"T谭维维","v":"谭维维MV4K"},{"n":"T逃跑计划","v":"逃跑计划MV4K"},{"n":"T田震","v":"田震MV4K"},{"n":"T谭晶","v":"谭晶MV4K"},{"n":"T屠洪刚","v":"屠洪刚MV4K"},{"n":"T泰勒·斯威夫特","v":"泰勒·斯威夫特MV4K"},{"n":"W王力宏","v":"王力宏MV4K"},{"n":"W王杰","v":"王杰MV4K"},{"n":"W吴克群","v":"吴克群MV4K"},{"n":"W王心凌","v":"王心凌MV4K"},{"n":"W汪峰","v":"汪峰MV4K"},{"n":"W伍佰","v":"伍佰MV4K"},{"n":"W王菲","v":"王菲MV4K"},{"n":"W五月天","v":"五月天MV4K"},{"n":"W汪苏泷","v":"汪苏泷MV4K"},{"n":"X徐佳莹","v":"徐佳莹MV4K"},{"n":"X弦子","v":"弦子MV4K"},{"n":"X萧亚轩","v":"萧亚轩MV4K"},{"n":"X许巍","v":"许巍MV4K"},{"n":"X薛之谦","v":"薛之谦MV4K"},{"n":"X许嵩","v":"许嵩MV4K"},{"n":"X小虎队","v":"小虎队MV4K"},{"n":"X萧敬腾","v":"萧敬腾MV4K"},{"n":"X谢霆锋","v":"谢霆锋MV4K"},{"n":"X徐小凤","v":"徐小凤MV4K"},{"n":"X信乐队","v":"信乐队MV4K"},{"n":"Y夜愿乐队","v":"夜愿乐队MV4K"},{"n":"Y原创音乐","v":"原创音乐MV4K"},{"n":"Y羽泉","v":"羽泉MV4K"},{"n":"Y粤语","v":"粤语MV4K"},{"n":"Y郁可唯","v":"郁可唯MV4K"},{"n":"Y叶倩文","v":"叶倩文MV4K"},{"n":"Y杨坤","v":"杨坤MV4K"},{"n":"Y庾澄庆","v":"庾澄庆MV4K"},{"n":"Y尤长靖","v":"尤长靖MV4K"},{"n":"Y易烊千玺","v":"易烊千玺MV4K"},{"n":"Y袁娅维","v":"袁娅维MV4K"},{"n":"Y杨丞琳","v":"杨丞琳MV4K"},{"n":"Y杨千嬅","v":"杨千嬅MV4K"},{"n":"Y杨宗纬","v":"杨宗纬MV4K"},{"n":"Z周杰伦","v":"周杰伦MV4K"},{"n":"Z张学友","v":"张学友MV4K"},{"n":"Z张信哲","v":"张信哲MV4K"},{"n":"Z张宇","v":"张宇MV4K"},{"n":"Z周华健","v":"周华健MV4K"},{"n":"Z张韶涵","v":"张韶涵MV4K"},{"n":"Z周深","v":"周深MV4K"},{"n":"Z纵贯线","v":"纵贯线MV4K"},{"n":"Z赵雷","v":"赵雷MV4K"},{"n":"Z周传雄","v":"周传雄MV4K"},{"n":"Z张国荣","v":"张国荣MV4K"},{"n":"Z周慧敏","v":"周慧敏MV4K"},{"n":"Z张惠妹","v":"张惠妹MV4K"},{"n":"Z周笔畅","v":"周笔畅MV4K"},{"n":"Z郑中基","v":"郑中基MV4K"},{"n":"Z张艺兴","v":"张艺兴MV4K"},{"n":"Z张震岳","v":"张震岳MV4K"},{"n":"Z中国好声音","v":"中国好声音MV4K"},{"n":"Z张雨生","v":"张雨生MV4K"},{"n":"Z郑智化","v":"郑智化MV4K"},{"n":"Z卓依婷","v":"卓依婷MV4K"},{"n":"Z中岛美雪","v":"中岛美雪MV4K"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "演唱会4K":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"演唱会4K"},{"n":"A阿杜","v":"阿杜演唱会4K"},{"n":"A阿黛尔","v":"阿黛尔演唱会4K"},{"n":"BBeyond","v":"Beyond演唱会4K"},{"n":"BBy2","v":"By2演唱会4K"},{"n":"BBIGBANG","v":"BIGBANG演唱会4K"},{"n":"B布兰妮","v":"布兰妮演唱会4K"},{"n":"B坂井泉水","v":"坂井泉水演唱会4K"},{"n":"C陈奕迅","v":"陈奕迅演唱会4K"},{"n":"C蔡依林","v":"蔡依林演唱会4K"},{"n":"C初音未来","v":"初音未来演唱会4K"},{"n":"C蔡健雅","v":"蔡健雅演唱会4K"},{"n":"C陈小春","v":"陈小春演唱会4K"},{"n":"C草蜢","v":"草蜢演唱会4K"},{"n":"C陈慧娴","v":"陈慧娴演唱会4K"},{"n":"C崔健","v":"崔健演唱会4K"},{"n":"C仓木麻衣","v":"仓木麻衣演唱会4K"},{"n":"D戴荃","v":"戴荃演唱会4K"},{"n":"D动力火车","v":"动力火车演唱会4K"},{"n":"D邓丽君","v":"邓丽君演唱会4K"},{"n":"D丁当","v":"丁当演唱会4K"},{"n":"D刀郎","v":"刀郎演唱会4K"},{"n":"D邓紫棋","v":"邓紫棋演唱会4K"},{"n":"D戴佩妮","v":"戴佩妮演唱会4K"},{"n":"D邓丽君","v":"邓丽君演唱会4K"},{"n":"F飞儿乐队","v":"飞儿乐队演唱会4K"},{"n":"F费玉清","v":"费玉清演唱会4K"},{"n":"F费翔","v":"费翔演唱会4K"},{"n":"F方大同","v":"方大同演唱会4K"},{"n":"F房东的猫","v":"房东的猫演唱会4K"},{"n":"F凤飞飞","v":"凤飞飞演唱会4K"},{"n":"F凤凰传奇","v":"凤凰传奇演唱会4K"},{"n":"G郭采洁","v":"郭采洁演唱会4K"},{"n":"G光良","v":"光良演唱会4K"},{"n":"G郭静","v":"郭静演唱会4K"},{"n":"G郭富城","v":"郭富城演唱会4K"},{"n":"H胡彦斌","v":"胡彦斌演唱会4K"},{"n":"H胡夏","v":"胡夏演唱会4K"},{"n":"H韩红","v":"韩红演唱会4K"},{"n":"H黄品源","v":"黄品源演唱会4K"},{"n":"H黄小琥","v":"黄小琥演唱会4K"},{"n":"H花儿乐队","v":"花儿乐队演唱会4K"},{"n":"H黄家强","v":"黄家强演唱会4K"},{"n":"H后街男孩","v":"后街男孩演唱会4K"},{"n":"J经典老歌","v":"经典老歌演唱会4K"},{"n":"J贾斯丁比伯","v":"贾斯丁比伯演唱会4K"},{"n":"J金池","v":"金池演唱会4K"},{"n":"J金志文","v":"金志文演唱会4K"},{"n":"J焦迈奇","v":"焦迈奇演唱会4K"},{"n":"K筷子兄弟","v":"筷子兄弟演唱会4K"},{"n":"L李玟","v":"李玟演唱会4K"},{"n":"L林忆莲","v":"林忆莲演唱会4K"},{"n":"L李克勤","v":"李克勤演唱会4K"},{"n":"L刘宪华","v":"刘宪华演唱会4K"},{"n":"L李圣杰","v":"李圣杰演唱会4K"},{"n":"L林宥嘉","v":"林宥嘉演唱会4K"},{"n":"L梁静茹","v":"梁静茹演唱会4K"},{"n":"L李健","v":"李健演唱会4K"},{"n":"L林俊杰","v":"林俊杰演唱会4K"},{"n":"L李玉刚","v":"李玉刚演唱会4K"},{"n":"L林志炫","v":"林志炫演唱会4K"},{"n":"L李荣浩","v":"李荣浩演唱会4K"},{"n":"L李宇春","v":"李宇春演唱会4K"},{"n":"L洛天依","v":"洛天依演唱会4K"},{"n":"L林子祥","v":"林子祥演唱会4K"},{"n":"L李宗盛","v":"李宗盛演唱会4K"},{"n":"L黎明","v":"黎明演唱会4K"},{"n":"L刘德华","v":"刘德华演唱会4K"},{"n":"L罗大佑","v":"罗大佑演唱会4K"},{"n":"L林肯公园","v":"林肯公园演唱会4K"},{"n":"LLadyGaga","v":"LadyGaga演唱会4K"},{"n":"L旅行团乐队","v":"旅行团乐队演唱会4K"},{"n":"M莫文蔚","v":"莫文蔚演唱会4K"},{"n":"M毛不易","v":"毛不易演唱会4K"},{"n":"M梅艳芳","v":"梅艳芳演唱会4K"},{"n":"M迈克尔杰克逊","v":"迈克尔杰克逊演唱会4K"},{"n":"N南拳妈妈","v":"南拳妈妈演唱会4K"},{"n":"P朴树","v":"朴树演唱会4K"},{"n":"Q齐秦","v":"齐秦演唱会4K"},{"n":"Q青鸟飞鱼","v":"青鸟飞鱼演唱会4K"},{"n":"R容祖儿","v":"容祖儿演唱会4K"},{"n":"R任贤齐","v":"任贤齐演唱会4K"},{"n":"S水木年华","v":"水木年华演唱会4K"},{"n":"S孙燕姿","v":"孙燕姿演唱会4K"},{"n":"S苏打绿","v":"苏打绿演唱会4K"},{"n":"SSHE","v":"SHE演唱会4K"},{"n":"S孙楠","v":"孙楠演唱会4K"},{"n":"T陶喆","v":"陶喆演唱会4K"},{"n":"T谭咏麟","v":"谭咏麟演唱会4K"},{"n":"T田馥甄","v":"田馥甄演唱会4K"},{"n":"T谭维维","v":"谭维维演唱会4K"},{"n":"T逃跑计划","v":"逃跑计划演唱会4K"},{"n":"T田震","v":"田震演唱会4K"},{"n":"T谭晶","v":"谭晶演唱会4K"},{"n":"T屠洪刚","v":"屠洪刚演唱会4K"},{"n":"T泰勒·斯威夫特","v":"泰勒·斯威夫特演唱会4K"},{"n":"W王力宏","v":"王力宏演唱会4K"},{"n":"W王杰","v":"王杰演唱会4K"},{"n":"W吴克群","v":"吴克群演唱会4K"},{"n":"W王心凌","v":"王心凌演唱会4K"},{"n":"W汪峰","v":"汪峰演唱会4K"},{"n":"W伍佰","v":"伍佰演唱会4K"},{"n":"W王菲","v":"王菲演唱会4K"},{"n":"W五月天","v":"五月天演唱会4K"},{"n":"W汪苏泷","v":"汪苏泷演唱会4K"},{"n":"X徐佳莹","v":"徐佳莹演唱会4K"},{"n":"X弦子","v":"弦子演唱会4K"},{"n":"X萧亚轩","v":"萧亚轩演唱会4K"},{"n":"X许巍","v":"许巍演唱会4K"},{"n":"X薛之谦","v":"薛之谦演唱会4K"},{"n":"X许嵩","v":"许嵩演唱会4K"},{"n":"X小虎队","v":"小虎队演唱会4K"},{"n":"X萧敬腾","v":"萧敬腾演唱会4K"},{"n":"X谢霆锋","v":"谢霆锋演唱会4K"},{"n":"X徐小凤","v":"徐小凤演唱会4K"},{"n":"X信乐队","v":"信乐队演唱会4K"},{"n":"Y夜愿乐队","v":"夜愿乐队演唱会4K"},{"n":"Y羽泉","v":"羽泉演唱会4K"},{"n":"Y郁可唯","v":"郁可唯演唱会4K"},{"n":"Y叶倩文","v":"叶倩文演唱会4K"},{"n":"Y杨坤","v":"杨坤演唱会4K"},{"n":"Y庾澄庆","v":"庾澄庆演唱会4K"},{"n":"Y尤长靖","v":"尤长靖演唱会4K"},{"n":"Y易烊千玺","v":"易烊千玺演唱会4K"},{"n":"Y袁娅维","v":"袁娅维演唱会4K"},{"n":"Y杨丞琳","v":"杨丞琳演唱会4K"},{"n":"Y杨千嬅","v":"杨千嬅演唱会4K"},{"n":"Y杨宗纬","v":"杨宗纬演唱会4K"},{"n":"Z周杰伦","v":"周杰伦演唱会4K"},{"n":"Z张学友","v":"张学友演唱会4K"},{"n":"Z张信哲","v":"张信哲演唱会4K"},{"n":"Z张宇","v":"张宇演唱会4K"},{"n":"Z周华健","v":"周华健演唱会4K"},{"n":"Z张韶涵","v":"张韶涵演唱会4K"},{"n":"Z周深","v":"周深演唱会4K"},{"n":"Z纵贯线","v":"纵贯线演唱会4K"},{"n":"Z赵雷","v":"赵雷演唱会4K"},{"n":"Z周传雄","v":"周传雄演唱会4K"},{"n":"Z张国荣","v":"张国荣演唱会4K"},{"n":"Z周慧敏","v":"周慧敏演唱会4K"},{"n":"Z张惠妹","v":"张惠妹演唱会4K"},{"n":"Z周笔畅","v":"周笔畅演唱会4K"},{"n":"Z郑中基","v":"郑中基演唱会4K"},{"n":"Z张艺兴","v":"张艺兴演唱会4K"},{"n":"Z张震岳","v":"张震岳演唱会4K"},{"n":"Z张雨生","v":"张雨生演唱会4K"},{"n":"Z郑智化","v":"郑智化演唱会4K"},{"n":"Z卓依婷","v":"卓依婷演唱会4K"},{"n":"Z中岛美雪","v":"中岛美雪演唱会4K"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "帕梅拉":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"帕梅拉"},{"n":"瘦腿","v":"帕梅拉瘦腿"},{"n":"腹部","v":"帕梅拉腹部"},{"n":"手臂","v":"帕梅拉手臂"},{"n":"热身","v":"帕梅拉热身"},{"n":"舞蹈","v":"帕梅拉舞蹈"},{"n":"燃脂","v":"帕梅拉燃脂"},{"n":"有氧","v":"帕梅拉有氧"},{"n":"拉伸","v":"帕梅拉拉伸"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "知名UP主":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"知名UP主"},{"n":"菠萝赛东","v":"菠萝赛东"},{"n":"冯提莫","v":"冯提莫"},{"n":"林延秋","v":"林延秋"},{"n":"吴sir说电影","v":"吴sir说电影"},{"n":"李子柒","v":"李子柒"},{"n":"美食作家王刚R","v":"美食作家王刚R"},{"n":"李洪绸","v":"李洪绸"},{"n":"申六宫","v":"申六宫"},{"n":"-LKs-","v":"-LKs-"},{"n":"小约翰可汗","v":"小约翰可汗"},{"n":"low馆长","v":"low馆长"},{"n":"自说自话的总裁","v":"自说自话的总裁"},{"n":"所长林超","v":"所长林超"},{"n":"世界未解之谜M","v":"世界未解之谜M"},{"n":"李永乐老师官方","v":"李永乐老师官方"},{"n":"罗兹","v":"罗兹"},{"n":"回到2049","v":"回到2049"},{"n":"二次元的中科院物理所","v":"二次元的中科院物理所"},{"n":"毕导THU","v":"毕导THU"},{"n":"罗翔讲刑法","v":"罗翔讲刑法"},{"n":"戴博士实验室","v":"戴博士实验室"},{"n":"芳斯塔芙","v":"芳斯塔芙"},{"n":"参赛者网","v":"参赛者网"},{"n":"三维地图看世界","v":"三维地图看世界"},{"n":"有机社会","v":"有机社会"},{"n":"乌鸦校尉CaptainWuya","v":"乌鸦校尉CaptainWuya"},{"n":"果壳","v":"果壳"},{"n":"严伯钧","v":"严伯钧"},{"n":"是你们的康康","v":"是你们的康康"},{"n":"老爸评测","v":"老爸评测"},{"n":"硬核的半佛仙人","v":"硬核的半佛仙人"},{"n":"盗月社食遇记","v":"盗月社食遇记"},{"n":"我是郭杰瑞","v":"我是郭杰瑞"},{"n":"无穷小亮的科普日常","v":"无穷小亮的科普日常"},{"n":"papi酱","v":"papi酱"},{"n":"老番茄","v":"老番茄"},{"n":"绵羊料理","v":"绵羊料理"},{"n":"老师好我叫何同学","v":"老师好我叫何同学"},{"n":"敬汉卿","v":"敬汉卿"},{"n":"周六野Zoey","v":"周六野Zoey"},{"n":"木鱼水心","v":"木鱼水心"},{"n":"凉风Kaze","v":"凉风Kaze"},{"n":"小潮院长","v":"小潮院长"},{"n":"中国BOY超级大猩猩","v":"中国BOY超级大猩猩"},{"n":"敖厂长","v":"敖厂长"},{"n":"A阿阳热爱前端","v":"阿阳热爱前端"},{"n":"A艾栗夏","v":"艾栗夏"},{"n":"A爱读书的King","v":"爱读书的King"},{"n":"A爱看报的Kris","v":"爱看报的Kris"},{"n":"A安森垚","v":"安森垚"},{"n":"A安慰记心理小店","v":"安慰记心理小店"},{"n":"A安因思谈","v":"安因思谈"},{"n":"A昂克英文君","v":"昂克英文君"},{"n":"B阪神电车","v":"阪神电车"},{"n":"B宝剑侍从","v":"宝剑侍从"},{"n":"B北京青年x凉子访谈录","v":"北京青年x凉子访谈录"},{"n":"B北师大刘文利","v":"北师大刘文利"},{"n":"B备胎说车","v":"备胎说车"},{"n":"B毕导THU","v":"毕导THU"},{"n":"B哔哩哔哩纪录片","v":"哔哩哔哩纪录片"},{"n":"B蝙蝠音乐","v":"蝙蝠音乐"},{"n":"B冰零-Mahiru忠诚眷属","v":"冰零-Mahiru忠诚眷属"},{"n":"B冰糖雪梨Cherie","v":"冰糖雪梨Cherie"},{"n":"B波普尔2020","v":"波普尔2020"},{"n":"B不务正业的李雷","v":"不务正业的李雷"},{"n":"B不正经老丝","v":"不正经老丝"},{"n":"C草说木言","v":"草说木言"},{"n":"C柴知道","v":"柴知道"},{"n":"C程十安","v":"C程十安"},{"n":"D大啊毛君","v":"大啊毛君"},{"n":"D大连老师王博文","v":"大连老师王博文"},{"n":"D大门ZRR","v":"大门ZRR"},{"n":"D大象放映室","v":"大象放映室"},{"n":"D大又元","v":"大又元"},{"n":"D戴建业老师","v":"戴建业老师"},{"n":"D调侃企业发展史","v":"调侃企业发展史"},{"n":"D动画讲编程","v":"动画讲编程"},{"n":"D动物学博士陈睿","v":"动物学博士陈睿"},{"n":"D杜滑滑","v":"杜滑滑"},{"n":"E鹅姐职场","v":"鹅姐职场"},{"n":"F帆雨动画","v":"帆雨动画"},{"n":"F反诈骗","v":"反诈骗"},{"n":"F方猫boom","v":"方猫boom"},{"n":"F芳斯塔芙","v":"芳斯塔芙"},{"n":"F菲比老司机","v":"菲比老司机"},{"n":"F附议YJango","v":"附议YJango"},{"n":"G肝帝董佳宁","v":"肝帝董佳宁"},{"n":"G高盛元","v":"高盛元"},{"n":"G龚老师课堂","v":"龚老师课堂"},{"n":"G郭爷物理","v":"郭爷物理"},{"n":"G国家玮-开明致学","v":"国家玮-开明致学"},{"n":"G果壳","v":"果壳"},{"n":"G果木浪子","v":"果木浪子"},{"n":"H哈佛雪梨","v":"哈佛雪梨"},{"n":"H韩顺平","v":"韩顺平"},{"n":"H韩语养乐多老师","v":"韩语养乐多老师"},{"n":"H画画的番木","v":"画画的番木"},{"n":"H画渣花小烙","v":"画渣花小烙"},{"n":"H幻海航行","v":"幻海航行"},{"n":"H灰细胞","v":"灰细胞"},{"n":"H回到2049","v":"回到2049"},{"n":"H会放羊的教书匠","v":"会放羊的教书匠"},{"n":"J机械百宝箱","v":"机械百宝箱"},{"n":"J纪录片我去看世界","v":"纪录片我去看世界"},{"n":"J纪录片之家字幕组","v":"纪录片之家字幕组"},{"n":"J技术研究院","v":"技术研究院"},{"n":"J季绝学","v":"季绝学"},{"n":"J夹性芝士","v":"夹性芝士"},{"n":"J讲历史的赵冬梅","v":"讲历史的赵冬梅"},{"n":"J经济研究室-祈祷","v":"经济研究室-祈祷"},{"n":"J军武志","v":"军武志"},{"n":"K看懂村","v":"看懂村"},{"n":"K科普中国","v":"科普中国"},{"n":"K科学声音","v":"科学声音"},{"n":"L拉片实验室","v":"拉片实验室"},{"n":"L唠点历史","v":"唠点历史"},{"n":"L老K的无聊杂谈","v":"老K的无聊杂谈"},{"n":"L老爸评测","v":"老爸评测"},{"n":"L老龙山下的狐狸","v":"老龙山下的狐狸"},{"n":"L老师好我叫何同学","v":"老师好我叫何同学"},{"n":"L乐乐老师的网络课堂","v":"乐乐老师的网络课堂"},{"n":"L乐有为医生","v":"乐有为医生"},{"n":"L冷静医夏","v":"冷静医夏"},{"n":"L李船长笔记","v":"李船长笔记"},{"n":"L李永乐老师官方","v":"李永乐老师官方"},{"n":"L历史调研室","v":"历史调研室"},{"n":"L历史启示录","v":"历史启示录"},{"n":"L罗翔说刑法","v":"罗翔说刑法"},{"n":"M木鱼水心","v":"木鱼水心"},{"n":"S森纳映画","v":"森纳映画"},{"n":"S沙盘上的战争","v":"沙盘上的战争"},{"n":"S设计师的睡前毒物","v":"设计师的睡前毒物"},{"n":"S生命中国","v":"生命中国"},{"n":"S史图馆","v":"史图馆"},{"n":"S世界记忆大师龙雅","v":"世界记忆大师龙雅"},{"n":"S司马南","v":"司马南"},{"n":"S思想史万有引力","v":"思想史万有引力"},{"n":"S所长林超","v":"所长林超"},{"n":"T汤质看本质","v":"汤质看本质"},{"n":"T天真的和感伤的小说家","v":"天真的和感伤的小说家"},{"n":"T听君一席课","v":"听君一席课"},{"n":"W唯一讲述者","v":"唯一讲述者"},{"n":"X心理学陈祉妍","v":"心理学陈祉妍"},{"n":"X心理学于悦","v":"心理学于悦"},{"n":"X心医林霖","v":"心医林霖"},{"n":"X刑法学","v":"刑法学"},{"n":"Y有观点大历史","v":"有观点大历史"},{"n":"Z这知识好冷","v":"这知识好冷"},{"n":"Z中科院格致论道讲坛","v":"中科院格致论道讲坛"},{"n":"Z中医基础理论","v":"中医基础理论"},{"n":"Z周观鱼UP","v":"周观鱼UP"},{"n":"Z周末音乐","v":"周末音乐"},{"n":"Z诸葛呈像","v":"诸葛呈像"},{"n":"Z子小孙的老年生活","v":"子小孙的老年生活"},{"n":"Z专心种花兔","v":"专心种花兔"},{"n":"Z子都忆情","v":"子都忆情"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "太极拳":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"太极拳"},{"n":"邱慧芳","v":"太极拳邱慧芳"},{"n":"陈氏","v":"太极拳陈氏"},{"n":"武当","v":"太极拳武当"},{"n":"二十四式","v":"太极拳二十四式"},{"n":"三十六式","v":"太极拳三十六式"},{"n":"五禽戏","v":"五禽戏"},{"n":"八段锦","v":"八段锦"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "舞蹈":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"舞蹈"},{"n":"古典舞","v":"古典舞"},{"n":"芭蕾舞","v":"芭蕾舞"},{"n":"民族舞","v":"民族舞"},{"n":"现代舞","v":"现代舞"},{"n":"踢踏舞","v":"踢踏舞"},{"n":"爵士舞","v":"爵士舞"},{"n":"拉丁舞","v":"拉丁舞"},{"n":"摩登舞","v":"摩登舞"},{"n":"街舞","v":"街舞"},{"n":"广场舞","v":"广场舞"},{"n":"宅舞","v":"宅舞"},{"n":"肚皮舞","v":"肚皮舞"},{"n":"钢管舞","v":"钢管舞"},{"n":"迪斯科","v":"迪斯科"},{"n":"劲舞","v":"热舞劲舞"},{"n":"独舞","v":"独舞"},{"n":"双人舞","v":"双人舞"},{"n":"三人舞","v":"三人舞"},{"n":"群舞","v":"群舞"},{"n":"组舞","v":"组舞"},{"n":"舞剧","v":"舞剧"},{"n":"电影歌舞","v":"电影歌舞"},{"n":"国风舞蹈","v":"国风舞蹈"},{"n":"河卫国风","v":"河南卫视国风"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "音乐":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"音乐4K"},{"n":"钢琴","v":"钢琴曲"},{"n":"小提琴","v":"小提音乐"},{"n":"手风琴","v":"手风音乐"},{"n":"二胡","v":"二胡音乐"},{"n":"古筝","v":"古筝音乐"},{"n":"笛子","v":"笛子音乐"},{"n":"琵琶","v":"琵琶音乐"},{"n":"古琴","v":"古琴音乐"},{"n":"编钟","v":"编钟音乐"},{"n":"协奏曲","v":"协奏曲"},{"n":"中国古风音乐","v":"中国古风音乐"},{"n":"背景音乐","v":"背景音乐"},{"n":"助眠音乐","v":"助眠音乐"},{"n":"胎教音乐","v":"胎教音乐"},{"n":"芭蕾舞曲","v":"芭蕾舞曲"},{"n":"拉丁舞曲","v":"拉丁舞曲"},{"n":"爵士舞曲","v":"爵士舞曲"},{"n":"摩登舞曲","v":"摩登舞曲"},{"n":"DJ舞曲","v":"DJ舞曲"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "歌曲":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"歌曲超清"},{"n":"歌曲合集","v":"经典无损音乐合集"},{"n":"歌曲热榜","v":"2022年歌曲排行榜"},{"n":"香港歌曲","v":"香港歌曲"},{"n":"台湾歌曲","v":"台湾歌曲"},{"n":"内地歌曲","v":"内地歌曲"},{"n":"粤语歌曲","v":"粤语歌曲"},{"n":"闽南歌曲","v":"闽南语歌曲"},{"n":"英文歌曲","v":"英文歌曲"},{"n":"日文歌曲","v":"日文歌曲"},{"n":"印度歌曲","v":"印度歌曲"},{"n":"韩国歌曲","v":"韩国歌曲"},{"n":"小语种歌曲","v":"小语种歌曲"},{"n":"经典老歌","v":"经典老歌"},{"n":"抖音热歌","v":"抖音热歌"},{"n":"网红翻唱","v":"网红翻唱"},{"n":"劲歌","v":"劲歌"},{"n":"慢歌","v":"慢歌"},{"n":"古风","v":"古风歌曲"},{"n":"舞曲","v":"DJ歌曲"},{"n":"欢快歌曲","v":"欢快歌曲"},{"n":"伤感歌曲","v":"伤感歌曲"},{"n":"70年代歌曲","v":"70年代歌曲"},{"n":"80年代歌曲","v":"80年代歌曲"},{"n":"90年代歌曲","v":"90年代歌曲"},{"n":"00年代歌曲","v":"00年代歌曲"},{"n":"10年代歌曲","v":"10年代歌曲"},{"n":"2020年歌曲","v":"2020年歌曲"},{"n":"2021年歌曲","v":"2021年歌曲"},{"n":"2022年歌曲","v":"2022年歌曲"},{"n":"经典儿歌","v":"经典儿歌"},{"n":"大合唱","v":"大合唱"},{"n":"音乐汇","v":"音乐汇"},{"n":"美声歌曲","v":"美声歌曲"},{"n":"通俗歌曲","v":"通俗歌曲"},{"n":"民族歌曲","v":"民族歌曲"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "平面设计教学":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"平面设计教学"},{"n":"AdobePhotoshop","v":"AdobePhotoshop教程"},{"n":"AdobeIllustrator","v":"AdobeIllustrator教程"},{"n":"CorelDRAW","v":"CorelDRAW教程"},{"n":"AdobeInDesign","v":"AdobeInDesign教程"},{"n":"AdobePagermaker","v":"AdobePagermaker教程"},{"n":"SAI","v":"SAI教程"},{"n":"AdobeBridge","v":"AdobeBridge教程"},{"n":"AdobePagermaker","v":"AdobePagermake教程r"},{"n":"3DStudioMax","v":"3DStudioMax教程"},{"n":"PR","v":"PR教程"},{"n":"AE","v":"AE教程"},{"n":"CINEMA4D","v":"CINEMA4D教程"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "软件教程":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"软件教程"},{"n":"MT管理器","v":"MT管理器"},{"n":"NP管理器","v":"NP管理器"},{"n":"mixplorer","v":"mixplorer"},{"n":"脱壳","v":"脱壳"},{"n":"爬虫","v":"爬虫"},{"n":"json&jar","v":"json&jar"},{"n":"网盘挂载","v":"网盘挂载"},{"n":"alist+WebDav","v":"alist+WebDav"},{"n":"TVBox","v":"TVBox"},{"n":"EXCEL","v":"EXCEL教程"},{"n":"Git入门到精通","v":"Git入门到精通"},{"n":"java","v":"java教程"},{"n":"phyton","v":"phyton教程"},{"n":"xml","v":"xml教程"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "小姐姐超清":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "白噪音4K":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"白噪音4K"},{"n":"窗白噪音","v":"窗白噪音4K"},{"n":"环境白噪音","v":"环境白噪音4K"},{"n":"自然白噪音","v":"自然白噪音4K"},{"n":"助眠白噪音","v":"助眠白噪音4K"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "搞笑":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"搞笑"},{"n":"搞笑配音","v":"搞笑配音"},{"n":"搞笑电影","v":"搞笑电影"},{"n":"搞笑综艺","v":"搞笑综艺"},{"n":"鬼畜电影","v":"鬼畜电影"},{"n":"搞笑动画","v":"搞笑动画"},{"n":"搞笑番","v":"搞笑番"},{"n":"十万个冷笑话","v":"十万个冷笑话"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "荒野求生超清":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "食谱":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"食谱"},{"n":"川菜食谱","v":"川菜食谱"},{"n":"豫菜食谱","v":"豫菜食谱"},{"n":"淮扬菜食谱","v":"淮扬菜食谱"},{"n":"湘菜食谱","v":"湘菜食谱"},{"n":"鲁菜食谱","v":"鲁菜食谱"},{"n":"粤菜食谱","v":"粤菜食谱"},{"n":"浙菜食谱","v":"浙菜食谱"},{"n":"徽菜食谱","v":"徽菜食谱"},{"n":"闽菜食谱","v":"闽菜食谱"},{"n":"苏菜食谱","v":"苏菜食谱"},{"n":"健康食谱","v":"健康食谱"},{"n":"面食","v":"面食"},{"n":"米饭","v":"米饭"},{"n":"粥","v":"粥的做法"},{"n":"酿酒","v":"自酿酒"},{"n":"小吃","v":"小吃制作"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "健身":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"健身"},{"n":"瘦腿","v":"健身瘦腿"},{"n":"腹部","v":"健身腹部"},{"n":"手臂","v":"健身手臂"},{"n":"热身","v":"健身热身"},{"n":"燃脂","v":"健身燃脂"},{"n":"有氧","v":"健身有氧"},{"n":"拉伸","v":"健身拉伸"},{"n":"军体拳第一套","v":"军体拳第一套"},{"n":"军体拳第二套","v":"军体拳第二套"},{"n":"军体拳第三套","v":"军体拳第三套"},{"n":"帕梅拉","v":"帕梅拉"},{"n":"广场舞","v":"广场舞"},{"n":"瑜伽","v":"瑜伽"},{"n":"冥想","v":"冥想"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "美食超清":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"美食超清"},{"n":"舌尖上的中国","v":"舌尖上的中国超清"},{"n":"老字号","v":"老字号美食超清"},{"n":"家常菜","v":"家常菜美食超清"},{"n":"香港美食探店","v":"香港美食探店超清"},{"n":"澳门美食探店","v":"澳门美食探店超清"},{"n":"上海美食探店","v":"上海美食探店超清"},{"n":"北京美食探店","v":"北京美食探店超清"},{"n":"重庆美食探店","v":"重庆美食探店超清"},{"n":"南京美食探店","v":"南京美食探店超清"},{"n":"广州美食探店","v":"广州美食探店超清"},{"n":"杭州美食探店","v":"杭州美食探店超清"},{"n":"成都美食探店","v":"成都美食探店超清"},{"n":"苏州美食探店","v":"苏州美食探店超清"},{"n":"武汉美食探店","v":"武汉美食探店超清"},{"n":"台湾美食探店","v":"台湾美食探店超清"},{"n":"川菜","v":"川菜美食超清"},{"n":"豫菜","v":"豫菜美食超清"},{"n":"淮扬菜","v":"淮扬菜美食超清"},{"n":"湘菜","v":"湘菜美食超清"},{"n":"鲁菜","v":"鲁菜美食超清"},{"n":"粤菜","v":"粤菜美食超清"},{"n":"潮菜","v":"潮菜美食超清"},{"n":"浙菜","v":"浙菜美食超清"},{"n":"徽菜","v":"徽菜美食超清"},{"n":"闽菜","v":"闽菜美食超清"},{"n":"东北菜","v":"东北菜美食超清"},{"n":"客家菜","v":"客家菜美食超清"},{"n":"苏菜","v":"苏菜美食超清"},{"n":"火锅","v":"火锅"},{"n":"面食","v":"面食"},{"n":"炒菜","v":"炒菜"},{"n":"点心","v":"点心"},{"n":"日料","v":"日料"},{"n":"小吃","v":"小吃"},{"n":"素食","v":"素食"},{"n":"蒸菜","v":"蒸菜"},{"n":"凉菜","v":"凉菜"},{"n":"早餐","v":"早餐"},{"n":"披萨","v":"披萨"},{"n":"烤鱼","v":"烤鱼"},{"n":"海鲜","v":"海鲜美食超清"},{"n":"汉堡","v":"汉堡"},{"n":"韩国菜","v":"韩国菜"},{"n":"泰国菜","v":"泰国菜"},{"n":"穆斯林菜","v":"穆斯林菜"},{"n":"法国菜","v":"法国菜"},{"n":"意大利菜","v":"意大利菜"},{"n":"西班牙菜","v":"西班牙菜"},{"n":"土耳其菜","v":"土耳其菜系"},{"n":"阿拉伯菜","v":"阿拉伯菜"},{"n":"德国菜","v":"德国菜"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "球星":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"球星"},{"n":"B巴萨","v":"巴萨4K"},{"n":"B巴黎圣日耳曼","v":"巴黎圣日耳曼4K"},{"n":"B贝克汉姆","v":"贝克汉姆4K"},{"n":"C罗","v":"C罗4K"},{"n":"D杜兰特","v":"杜兰特4K"},{"n":"D德布劳内","v":"德布劳内4K"},{"n":"D德甲","v":"德甲4K"},{"n":"F1","v":"F14K"},{"n":"G国米","v":"国米4K"},{"n":"G高尔夫","v":"高尔夫4K"},{"n":"H亨利","v":"亨利4K"},{"n":"H皇马","v":"皇马4K"},{"n":"K库里","v":"库里4K"},{"n":"L罗纳尔多","v":"罗纳尔多4K"},{"n":"M梅西","v":"梅西4K"},{"n":"M曼联","v":"曼联4K"},{"n":"M曼城","v":"曼城4K"},{"n":"NBA","v":"NBA4K"},{"n":"N内马尔","v":"内马尔4K"},{"n":"O欧冠","v":"欧冠4K"},{"n":"Q齐达内","v":"齐达内4K"},{"n":"S世界杯","v":"世界杯4K"},{"n":"S斯诺克","v":"斯诺克4K"},{"n":"T天下足球","v":"天下足球4K"},{"n":"UFC","v":"UFC4K"},{"n":"W网球","v":"网球4K"},{"n":"X小罗","v":"小罗4K"},{"n":"X西甲","v":"西甲4K"},{"n":"Y英超","v":"英超4K"},{"n":"Y意甲","v":"意甲4K"},{"n":"Z詹姆斯","v":"詹姆斯4K"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "相声小品":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"相声小品"},{"n":"C陈佩斯","v":"陈佩斯小品4K"},{"n":"C春晚小品","v":"春晚小品4K"},{"n":"C曹云金","v":"曹云金相声4K"},{"n":"D单口相声","v":"单口相声4K"},{"n":"D德云社","v":"德云社小品4K"},{"n":"E二人转","v":"二人转4K"},{"n":"F冯巩","v":"冯巩小品4K"},{"n":"G郭德纲","v":"郭德纲相声4K"},{"n":"G郭冬临","v":"郭冬临小品4K"},{"n":"G郭达","v":"郭达小品4K"},{"n":"K开心麻花","v":"开心麻花小品4K"},{"n":"P评书","v":"评书4K"},{"n":"P潘长江","v":"潘长江小品4K"},{"n":"Q青曲社","v":"青曲社相声4K"},{"n":"Q群口相声","v":"群口相声4K"},{"n":"S宋小宝","v":"宋小宝小品4K"},{"n":"W文松","v":"文松小品4K"},{"n":"X小曲","v":"小曲相声4K"},{"n":"X喜剧综艺","v":"喜剧综艺4K"},{"n":"Y严顺开","v":"严顺开小品4K"},{"n":"Y岳云鹏","v":"岳云鹏相声小品4K"},{"n":"Z赵本山","v":"赵本山小品4K"},{"n":"Z赵丽蓉","v":"赵丽蓉小品4K"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "戏曲":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"戏曲4K"},{"n":"B梆子腔","v":"梆子腔戏曲4K"},{"n":"C采茶戏","v":"采茶戏戏曲4K"},{"n":"C潮剧","v":"潮剧戏曲4K"},{"n":"C彩调","v":"彩调戏曲4K"},{"n":"C川剧","v":"川剧戏曲4K"},{"n":"D滇剧","v":"滇剧戏曲4K"},{"n":"D傣剧","v":"傣剧戏曲4K"},{"n":"E二人台","v":"二人台戏曲4K"},{"n":"G高腔","v":"高腔戏曲4K"},{"n":"G高甲戏","v":"高甲戏戏曲4K"},{"n":"G赣剧","v":"赣剧戏曲4K"},{"n":"G桂剧","v":"桂剧戏曲4K"},{"n":"H黄梅戏","v":"黄梅戏戏曲4K"},{"n":"H河北梆子","v":"河北梆子戏曲4K"},{"n":"H河南曲剧","v":"河南曲剧戏曲4K"},{"n":"H淮剧","v":"淮剧戏曲4K"},{"n":"H沪剧","v":"沪剧戏曲4K"},{"n":"H滑稽戏","v":"滑稽戏戏曲4K"},{"n":"H徽剧","v":"徽剧4K"},{"n":"H汉剧","v":"汉剧戏曲4K"},{"n":"H湖南花鼓戏","v":"湖南花鼓戏戏曲4K"},{"n":"J京剧","v":"京剧戏曲4K"},{"n":"J晋剧","v":"晋剧戏曲4K"},{"n":"J吉剧","v":"吉剧戏曲4K"},{"n":"K昆曲","v":"昆曲戏曲4K"},{"n":"L梨园戏","v":"梨园戏戏曲4K"},{"n":"L龙江剧","v":"龙江剧戏曲4K"},{"n":"M闽剧","v":"闽剧戏曲4K"},{"n":"P评剧","v":"评剧戏曲4K"},{"n":"P蒲剧","v":"蒲剧戏曲4K"},{"n":"P皮影戏","v":"皮影戏戏曲4K"},{"n":"P莆仙戏","v":"莆仙戏戏曲4K"},{"n":"Q黔剧","v":"黔剧戏曲4K"},{"n":"Q祁剧","v":"祁剧戏曲4K"},{"n":"Q秦腔","v":"秦腔戏曲4K"},{"n":"S上党梆子","v":"上党梆子戏曲4K"},{"n":"S山东梆子","v":"山东梆子戏曲4K"},{"n":"S绍剧","v":"绍剧戏曲4K"},{"n":"W武安平调","v":"武安平调戏曲4K"},{"n":"W婺剧","v":"婺剧戏曲4K"},{"n":"X湘剧","v":"湘剧戏曲4K"},{"n":"Y越剧","v":"越剧戏曲4K"},{"n":"Y豫剧","v":"豫剧戏曲4K"},{"n":"Y雁剧","v":"雁剧戏曲4K"},{"n":"Y越调","v":"越调戏曲4K"},{"n":"Y粤剧","v":"粤剧戏曲4K"},{"n":"Z壮剧","v":"壮剧戏曲4K"},{"n":"Z藏剧","v":"藏剧戏曲4K"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "旅游":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"旅游"},{"n":"A澳门","v":"澳门旅游"},{"n":"A安徽","v":"安徽旅游"},{"n":"B布达拉宫","v":"布达拉宫旅游"},{"n":"B北京","v":"北京旅游"},{"n":"C重庆","v":"重庆旅游"},{"n":"C草原","v":"草原旅游"},{"n":"D大海","v":"大海旅游"},{"n":"F福建","v":"福建旅游"},{"n":"G广东","v":"广东旅游"},{"n":"G广西","v":"广西旅游"},{"n":"G贵州","v":"贵州旅游"},{"n":"G甘肃","v":"甘肃旅游"},{"n":"H海南","v":"海南旅游"},{"n":"H河北","v":"河北旅游"},{"n":"H河南","v":"河南旅游"},{"n":"H湖北","v":"湖北旅游"},{"n":"H湖南","v":"湖南旅游"},{"n":"H黑龙江","v":"黑龙江旅游"},{"n":"J吉林","v":"吉林旅游"},{"n":"J江苏","v":"江苏旅游"},{"n":"J江西","v":"江西旅游"},{"n":"L辽宁","v":"辽宁旅游"},{"n":"M民宿","v":"民宿旅游"},{"n":"N内蒙古","v":"内蒙古旅游"},{"n":"N宁夏","v":"宁夏旅游"},{"n":"Q青海","v":"青海旅游"},{"n":"S上海","v":"上海旅游"},{"n":"S陕西","v":"陕西旅游"},{"n":"S四川","v":"四川旅游"},{"n":"S山西","v":"山西旅游"},{"n":"S山东","v":"山东旅游"},{"n":"T天津","v":"天津旅游"},{"n":"T台湾","v":"台湾旅游"},{"n":"T天空","v":"天空旅游"},{"n":"X西湖","v":"西湖旅游"},{"n":"X西藏","v":"西藏旅游"},{"n":"X新疆","v":"新疆旅游"},{"n":"X香港","v":"香港旅游"},{"n":"Y云南","v":"云南旅游"},{"n":"Z浙江","v":"浙江旅游"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}]
    },
    detailUrl:'/x/web-interface/view?aid=fyid',//二级详情拼接链接(json格式用)
    searchUrl:'/x/web-interface/search/type?search_type=video&keyword=**&page=1',
    searchable:2,
    quickSearch:0,
    headers:{
        "User-Agent":"PC_UA",
        "Referer": "https://www.bilibili.com",
        "Cookie":"$bili_cookie"
    },
    timeout:5000,
    limit:8,
    play_parse:true,
    lazy:"js:let ids=input.split('_');let result={};let iurl='https://api.bilibili.com:443/x/player/playurl?avid='+ids[0]+'&cid='+ids[1]+'&qn=116';let html=request(iurl);let jRoot=JSON.parse(html);let jo=jRoot['data'];let ja=jo['durl'];let maxSize=-1;let position=-1;ja.forEach(function(tmpJo,i){if(maxSize<Number(tmpJo['size'])){maxSize=Number(tmpJo['size']);position=i}});let purl='';if(ja.length>0){if(position===-1){position=0}purl=ja[position]['url']}result['parse']=0;result['playUrl']='';result['url']=unescape(purl);result['header']={Referer:'https://live.bilibili.com','User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36'};result['contentType']='video/x-flv';input=result",
    double:false,
    推荐:'*',
    一级:'js:let html=request(input);let msg=JSON.parse(html).message;if(msg!=="0"){VODS=[{vod_name:KEY+"➢"+msg,vod_id:"no_data",vod_remarks:"别点,缺少bili_cookie",vod_pic:"https://ghproxy.com/https://raw.githubusercontent.com/hjdhnx/dr_py/main/404.jpg"}]}else{let videos=[];let vodList=JSON.parse(html).data.result;vodList.forEach(function(vod){let aid=vod["aid"];let title=vod["title"].replace(\'<em class="keyword">\',"").replace("</em>","").replace("&quot;","\'");let img="https:"+vod["pic"];let remark=vod["duration"];videos.push({vod_id:aid,vod_name:title,vod_pic:img,vod_remarks:remark})});VODS=videos}',
    二级:'js:let html=request(input);let jo=JSON.parse(html).data;let aid=jo["aid"];let title=jo["title"].replace(\'<em class="keyword">\',"").replace("</em>","");let pic=jo["pic"];let desc=jo["desc"];let year=jo["pubdate"];let dire=jo["owner"]["name"];let typeName=jo["tname"];let remark=jo["duration"];let vod={vod_id:aid,vod_name:title,vod_pic:pic,type_name:typeName,vod_year:year,vod_area:"bilidanmu",vod_remarks:remark,vod_tags:"mv",vod_director:dire,vod_content:desc};let ja=jo["pages"];let playurls=[];ja.forEach(function(tmpJo){let cid=tmpJo["cid"];let part=tmpJo["part"].replace("#","﹟").replace("$","﹩");playurls.push(part+"$"+aid+"_"+cid)});let playUrl=playurls.join("#");vod["vod_play_from"]="B站";vod["vod_play_url"]=playUrl;VOD=vod;',
    搜索:'*',
}
