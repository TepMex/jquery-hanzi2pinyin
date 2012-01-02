/*
 * jQuery hanzi2pinyin v0.1 (simplified Chinese, common characters) - fast hanzi to pinyin conversion
 * Author: Caiguanhao
 * Licensed under the GPL license:
 * http://www.gnu.org/licenses/gpl.html
 */
;(function($){
	$.fn.extend({
		hanzi2pinyin:function(options){
			var defaults={
				target:null,
				hyphen:'-',
				'case':'lower',
				punctuation_marks:'remove',
				fullwidth_chars:'replace'
			},
			options=$.extend(defaults, options),
			simp_chinese_chars='啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵觉决诀绝均菌钧军君峻俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐恰洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座',
			punctuation_marks={'。':'.','？':'?','！':'!','、':',','，':',','；':';','：':':','“':'"','”':'"','‘':'\'','’':'\'','（':'(','）':')','【':'[','】':']','［':'[','］':']','〔':'[','〕':']','《':'<','》':'>','〈':'<','〉':'>','·':'.','—':'-','…':'...','－':'-','·':'.','×':'*','＊':'*','＃':'#','～':'~','﹏':'_'},
			punctuation_marks_pattern=/[。？！、，；：“”‘’（）【】［］〔〕《》〈〉·—…－×＊＃～﹏]/g,
			val_elements=['input','textarea','select'],
			h2p_conversion=function(){
				var s=($.type(this)==='object')?($.inArray($(this)[0].nodeName.toLowerCase(),val_elements)>-1?$(this).val():$(this).html()):this,
				o=function(){
					if(s.match(/[\u4e00-\u9fa5]/g)){
						s=s.replace(/[\u4e00-\u9fa5]/g,function(w){
							return function(n){
								switch(options['case']){
								case 'proper':
								case 'title':
									return n.substr(0,1).toUpperCase()+n.substr(1);
								case 'upper':
									return n.toUpperCase();
								default:
									return n;
								}
							}(function(n){
								switch(true){
								case(n>3746):return'zuo';case(n>3744):return'zun';case(n>3740):return'zui';case(n>3738):return'zuan';case(n>3730):return'zu';case(n>3726):return'zou';case(n>3719):return'zong';case(n>3704):return'zi';case(n>3693):return'zhuo';case(n>3691):return'zhun';case(n>3685):return'zhui';case(n>3678):return'zhuang';case(n>3672):return'zhuan';case(n>3671):return'zhuai';case(n>3669):return'zhua';case(n>3643):return'zhu';case(n>3629):return'zhou';case(n>3618):return'zhong';case(n>3575):return'zhi';case(n>3560):return'zheng';case(n>3544):return'zhen';case(n>3534):return'zhe';case(n>3524):return'zhao';case(n>3509):return'zhang';case(n>3492):return'zhan';case(n>3486):return'zhai';case(n>3472):return'zha';case(n>3468):return'zeng';case(n>3467):return'zen';case(n>3466):return'zei';case(n>3462):return'ze';case(n>3448):return'zao';case(n>3445):return'zang';case(n>3441):return'zan';case(n>3434):return'zai';case(n>3431):return'za';case(n>3419):return'yun';case(n>3409):return'yue';case(n>3389):return'yuan';case(n>3345):return'yu';case(n>3324):return'you';case(n>3309):return'yong';case(n>3308):return'yo';case(n>3290):return'ying';case(n>3274):return'yin';case(n>3221):return'yi';case(n>3206):return'ye';case(n>3191):return'yao';case(n>3174):return'yang';case(n>3141):return'yan';case(n>3125):return'ya';case(n>3111):return'xun';case(n>3105):return'xue';case(n>3095):return'xuan';case(n>3076):return'xu';case(n>3067):return'xiu';case(n>3060):return'xiong';case(n>3045):return'xing';case(n>3035):return'xin';case(n>3014):return'xie';case(n>2996):return'xiao';case(n>2976):return'xiang';case(n>2950):return'xian';case(n>2937):return'xia';case(n>2902):return'xi';case(n>2873):return'wu';case(n>2864):return'wo';case(n>2861):return'weng';case(n>2851):return'wen';case(n>2818):return'wei';case(n>2808):return'wang';case(n>2791):return'wan';case(n>2789):return'wai';case(n>2782):return'wa';case(n>2771):return'tuo';case(n>2768):return'tun';case(n>2762):return'tui';case(n>2760):return'tuan';case(n>2749):return'tu';case(n>2745):return'tou';case(n>2732):return'tong';case(n>2722):return'ting';case(n>2719):return'tie';case(n>2714):return'tiao';case(n>2706):return'tian';case(n>2691):return'ti';case(n>2687):return'teng';case(n>2686):return'te';case(n>2675):return'tao';case(n>2662):return'tang';case(n>2644):return'tan';case(n>2635):return'tai';case(n>2626):return'ta';case(n>2618):return'suo';case(n>2615):return'sun';case(n>2604):return'sui';case(n>2601):return'suan';case(n>2588):return'su';case(n>2585):return'sou';case(n>2577):return'song';case(n>2561):return'si';case(n>2557):return'shuo';case(n>2553):return'shun';case(n>2549):return'shui';case(n>2546):return'shuang';case(n>2544):return'shuan';case(n>2540):return'shuai';case(n>2538):return'shua';case(n>2505):return'shu';case(n>2495):return'shou';case(n>2448):return'shi';case(n>2437):return'sheng';case(n>2421):return'shen';case(n>2409):return'she';case(n>2398):return'shao';case(n>2390):return'shang';case(n>2374):return'shan';case(n>2372):return'shai';case(n>2363):return'sha';case(n>2362):return'seng';case(n>2361):return'sen';case(n>2358):return'se';case(n>2354):return'sao';case(n>2351):return'sang';case(n>2347):return'san';case(n>2343):return'sai';case(n>2340):return'sa';case(n>2338):return'ruo';case(n>2336):return'run';case(n>2333):return'rui';case(n>2331):return'ruan';case(n>2321):return'ru';case(n>2318):return'rou';case(n>2308):return'rong';case(n>2307):return'ri';case(n>2305):return'reng';case(n>2295):return'ren';case(n>2293):return're';case(n>2290):return'rao';case(n>2285):return'rang';case(n>2281):return'ran';case(n>2279):return'qun';case(n>2271):return'que';case(n>2260):return'quan';case(n>2247):return'qu';case(n>2239):return'qiu';case(n>2237):return'qiong';case(n>2224):return'qing';case(n>2213):return'qin';case(n>2208):return'qie';case(n>2193):return'qiao';case(n>2185):return'qiang';case(n>2163):return'qian';case(n>2160):return'qia';case(n>2124):return'qi';case(n>2109):return'pu';case(n>2100):return'po';case(n>2091):return'ping';case(n>2086):return'pin';case(n>2084):return'pie';case(n>2080):return'piao';case(n>2076):return'pian';case(n>2059):return'pi';case(n>2045):return'peng';case(n>2043):return'pen';case(n>2034):return'pei';case(n>2027):return'pao';case(n>2022):return'pang';case(n>2014):return'pan';case(n>2008):return'pai';case(n>2002):return'pa';case(n>1995):return'ou';case(n>1994):return'o';case(n>1990):return'nuo';case(n>1988):return'nue';case(n>1987):return'nuan';case(n>1986):return'nv';case(n>1983):return'nu';case(n>1979):return'nong';case(n>1975):return'niu';case(n>1969):return'ning';case(n>1968):return'nin';case(n>1961):return'nie';case(n>1959):return'niao';case(n>1957):return'niang';case(n>1950):return'nian';case(n>1939):return'ni';case(n>1938):return'neng';case(n>1937):return'nen';case(n>1935):return'nei';case(n>1934):return'ne';case(n>1929):return'nao';case(n>1928):return'nang';case(n>1925):return'nan';case(n>1920):return'nai';case(n>1913):return'na';case(n>1898):return'mu';case(n>1895):return'mou';case(n>1878):return'mo';case(n>1877):return'miu';case(n>1871):return'ming';case(n>1865):return'min';case(n>1863):return'mie';case(n>1855):return'miao';case(n>1846):return'mian';case(n>1832):return'mi';case(n>1824):return'meng';case(n>1821):return'men';case(n>1805):return'mei';case(n>1804):return'me';case(n>1792):return'mao';case(n>1786):return'mang';case(n>1777):return'man';case(n>1771):return'mai';case(n>1762):return'ma';case(n>1750):return'luo';case(n>1743):return'lun';case(n>1741):return'lue';case(n>1735):return'luan';case(n>1721):return'lv';case(n>1701):return'lu';case(n>1695):return'lou';case(n>1686):return'long';case(n>1675):return'liu';case(n>1661):return'ling';case(n>1649):return'lin';case(n>1644):return'lie';case(n>1631):return'liao';case(n>1620):return'liang';case(n>1606):return'lian';case(n>1605):return'lia';case(n>1571):return'li';case(n>1568):return'leng';case(n>1557):return'lei';case(n>1555):return'le';case(n>1546):return'lao';case(n>1539):return'lang';case(n>1524):return'lan';case(n>1521):return'lai';case(n>1514):return'la';case(n>1510):return'kuo';case(n>1506):return'kun';case(n>1495):return'kui';case(n>1487):return'kuang';case(n>1485):return'kuan';case(n>1481):return'kuai';case(n>1476):return'kua';case(n>1469):return'ku';case(n>1465):return'kou';case(n>1461):return'kong';case(n>1459):return'keng';case(n>1455):return'ken';case(n>1440):return'ke';case(n>1436):return'kao';case(n>1429):return'kang';case(n>1423):return'kan';case(n>1418):return'kai';case(n>1414):return'ka';case(n>1403):return'jun';case(n>1393):return'jue';case(n>1386):return'juan';case(n>1361):return'ju';case(n>1344):return'jiu';case(n>1342):return'jiong';case(n>1317):return'jing';case(n>1297):return'jin';case(n>1270):return'jie';case(n>1242):return'jiao';case(n>1229):return'jiang';case(n>1189):return'jian';case(n>1172):return'jia';case(n>1119):return'ji';case(n>1109):return'huo';case(n>1103):return'hun';case(n>1082):return'hui';case(n>1068):return'huang';case(n>1054):return'huan';case(n>1049):return'huai';case(n>1040):return'hua';case(n>1022):return'hu';case(n>1015):return'hou';case(n>1006):return'hong';case(n>1001):return'heng';case(n>997):return'hen';case(n>995):return'hei';case(n>977):return'he';case(n>968):return'hao';case(n>965):return'hang';case(n>946):return'han';case(n>939):return'hai';case(n>938):return'ha';case(n>932):return'guo';case(n>929):return'gun';case(n>913):return'gui';case(n>910):return'guang';case(n>899):return'guan';case(n>896):return'guai';case(n>890):return'gua';case(n>872):return'gu';case(n>863):return'gou';case(n>848):return'gong';case(n>841):return'geng';case(n>839):return'gen';case(n>838):return'gei';case(n>821):return'ge';case(n>811):return'gao';case(n>802):return'gang';case(n>791):return'gan';case(n>785):return'gai';case(n>783):return'ga';case(n>738):return'fu';case(n>737):return'fou';case(n>736):return'fo';case(n>721):return'feng';case(n>706):return'fen';case(n>694):return'fei';case(n>683):return'fang';case(n>666):return'fan';case(n>658):return'fa';case(n>650):return'er';case(n>649):return'en';case(n>636):return'e';case(n>624):return'duo';case(n>615):return'dun';case(n>611):return'dui';case(n>605):return'duan';case(n>590):return'du';case(n>583):return'dou';case(n>573):return'dong';case(n>572):return'diu';case(n>563):return'ding';case(n>556):return'die';case(n>547):return'diao';case(n>531):return'dian';case(n>512):return'di';case(n>505):return'deng';case(n>502):return'de';case(n>490):return'dao';case(n>485):return'dang';case(n>470):return'dan';case(n>458):return'dai';case(n>452):return'da';case(n>446):return'cuo';case(n>443):return'cun';case(n>435):return'cui';case(n>432):return'cuan';case(n>428):return'cu';case(n>427):return'cou';case(n>421):return'cong';case(n>409):return'ci';case(n>407):return'chuo';case(n>400):return'chun';case(n>395):return'chui';case(n>389):return'chuang';case(n>382):return'chuan';case(n>381):return'chuai';case(n>365):return'chu';case(n>353):return'chou';case(n>348):return'chong';case(n>332):return'chi';case(n>317):return'cheng';case(n>307):return'chen';case(n>301):return'che';case(n>292):return'chao';case(n>279):return'chang';case(n>269):return'chan';case(n>266):return'chai';case(n>255):return'cha';case(n>253):return'ceng';case(n>248):return'ce';case(n>243):return'cao';case(n>238):return'cang';case(n>231):return'can';case(n>220):return'cai';case(n>219):return'ca';case(n>210):return'bu';case(n>189):return'bo';case(n>180):return'bing';case(n>174):return'bin';case(n>170):return'bie';case(n>166):return'biao';case(n>154):return'bian';case(n>130):return'bi';case(n>124):return'beng';case(n>120):return'ben';case(n>105):return'bei';case(n>88):return'bao';case(n>76):return'bang';case(n>61):return'ban';case(n>53):return'bai';case(n>35):return'ba';case(n>26):return'ao';case(n>23):return'ang';case(n>14):return'an';case(n>1):return'ai';case(n>-1):return'a';default:return'';
								}
							}(simp_chinese_chars.indexOf(w)))+options.hyphen;
						});
					}
					return function(n){
						if(n.slice(-options.hyphen.length)==options.hyphen)n=n.slice(0,-options.hyphen.length);
						return n;
					}(function(n){
						switch(options.punctuation_marks){
						case 'replace':
							n=n.replace(punctuation_marks_pattern,function(m){return punctuation_marks[m]||m;});
						case 'remove':
							n=n.replace(punctuation_marks_pattern,'');
						}
						switch(options.fullwidth_chars){
						case 'replace':
							return n.replace(/[\uff00-\uffff]/g,function(m){return String.fromCharCode(m.charCodeAt(0)-65248)||m;});
						case 'remove':
							return n.replace(/[\uff00-\uffff]/g,'');
						default:
							return n;
						}
					}(s));
				}(),ot=options.target;
				if($.type(this).toLowerCase()=='object'&&!options.target)ot=this;
				$(ot).each(function(){
					if($.inArray($(this)[0].nodeName.toLowerCase(),val_elements)>-1)
						$(this).val(o);
					else
						$(this).html(o);
				});
				return o;
			};
			switch($.type(this).toLowerCase()){
			case 'object':
				return this.each(function(){h2p_conversion.apply(this)});
			default:
				return h2p_conversion.apply(this);
			}
		}
	});
})(jQuery);
String.prototype.hanzi2pinyin=function(options){return $.fn.hanzi2pinyin.apply(this,[options]);};