const poems = [
    { "id": 1, "kami_no_ku": "秋の田の かりほの庵の 苫をあらみ", "shimo_no_ku": "わが衣手は露にぬれつつ", "translation": "秋の田圃の番をするための仮小屋の屋根の苫の目が粗いので、私の袖は夜露に濡れていくことだ。" },
    { "id": 2, "kami_no_ku": "春過ぎて 夏来にけらし 白妙の", "shimo_no_ku": "衣ほすてふ 天の香具山", "translation": "春が過ぎて夏が来たようだ。夏になると白い衣を干すという、あの天の香具山に。" },
    { "id": 3, "kami_no_ku": "あしびきの 山鳥の尾の しだり尾の", "shimo_no_ku": "ながながし夜をひとりかも寝む", "translation": "山鳥の長く垂れ下がった尾のように、長い長い夜を恋しい人と離れて、ひとりで寂しく寝るのだろうか。" },
    { "id": 4, "kami_no_ku": "田子の浦に うち出でてみれば 白妙の", "shimo_no_ku": "富士の高嶺に雪は降りつつ", "translation": "田子の浦に出てみると、真っ白な富士の高い峰に雪が降り積もっていることだ。" },
    { "id": 5, "kami_no_ku": "奥山に 紅葉踏み分け 鳴く鹿の", "shimo_no_ku": "声聞く時ぞ秋は悲しき", "translation": "奥深い山で紅葉を踏み分けて鳴く鹿の声を聞くときこそ、秋は本当に悲しいものだと感じる。" },
    { "id": 6, "kami_no_ku": "かささぎの 渡せる橋に おく霜の", "shimo_no_ku": "白きを見れば夜ぞ更けにける", "translation": "かささぎが渡したという天の川の橋に降りた霜の白さを見ると、夜も更けたのだなあと感じることだ。" },
    { "id": 7, "kami_no_ku": "天の原 ふりさけ見れば 春日なる", "shimo_no_ku": "三笠の山に出でし月かも", "translation": "大空をはるかに仰ぎ見ると、月が出ている。あの月は、故郷の春日にある三笠の山に出ていた月と同じ月なのだなあ。" },
    { "id": 8, "kami_no_ku": "わが庵は 都のたつみ しかぞ住む", "shimo_no_ku": "世をうぢ山と人はいふなり", "translation": "私の庵は都の東南にあって、このように静かに住んでいる。それを世間の人は、私が世を憂いて宇治山に隠れ住んでいると言っているようだ。" },
    { "id": 9, "kami_no_ku": "花の色は 移りにけりな いたづらに", "shimo_no_ku": "わが身世にふるながめせしまに", "translation": "桜の花の色は、むなしく色あせてしまった。私が恋の物思いにふけっている間に。" },
    { "id": 10, "kami_no_ku": "これやこの 行くも帰るも 別れては", "shimo_no_ku": "知るも知らぬも逢坂の関", "translation": "これがあの、京から出て行く人も帰る人も、知っている人も知らない人も、ここで別れてはまた逢うという逢坂の関なのだなあ。" },
    { "id": 11, "kami_no_ku": "わたの原 八十島かけて 漕ぎ出でぬと", "shimo_no_ku": "人には告げよ海人の釣舟", "translation": "大海原に数多くの島々を目指して漕ぎ出して行ったと、都にいる人々に伝えておくれ、漁師の釣舟よ。" },
    { "id": 12, "kami_no_ku": "天つ風 雲の通ひ路 吹き閉ぢよ", "shimo_no_ku": "乙女の姿しばしとどめむ", "translation": "天を吹く風よ、雲の中の通り道を吹き閉ざしておくれ。天女たちの姿を、もうしばらく地上に留めておきたいのだ。" },
    { "id": 13, "kami_no_ku": "筑波嶺の 峰より落つる 男女川", "shimo_no_ku": "恋ぞつもりて淵となりぬる", "translation": "筑波山の峰から流れ落ちる男女川の水が、積もり積もって深い淵となるように、私の恋も積もり積もって淵のようになってしまった。" },
    { "id": 14, "kami_no_ku": "陸奥の しのぶもぢずり 誰ゆゑに", "shimo_no_ku": "乱れそめにしわれならなくに", "translation": "陸奥のしのぶもじずりの乱れ模様のように、いったい誰のせいで私の心が乱れ始めたのだろうか。私のせいではないのに。" },
    { "id": 15, "kami_no_ku": "君がため 春の野に出でて 若菜摘む", "shimo_no_ku": "わが衣手に雪は降りつつ", "translation": "あなたのために春の野原に出て若菜を摘んでいると、私の袖に雪が降りかかってくることだ。" },
    { "id": 16, "kami_no_ku": "立ち別れ いなばの山の 峰に生ふる", "shimo_no_ku": "まつとし聞かば今帰り来む", "translation": "あなたと別れて因幡の国へ行っても、稲葉山の峰に生えている松のように、あなたが私を待っていると聞いたら、すぐにでも帰ってきましょう。" },
    { "id": 17, "kami_no_ku": "ちはやぶる 神代も聞かず 竜田川", "shimo_no_ku": "からくれなゐに水くくるとは", "translation": "不思議なことが多かった神代の昔でさえも聞いたことがない。竜田川が、一面に紅葉が流れて、唐紅色のしぼり染めのように水を染め上げているとは。" },
    { "id": 18, "kami_no_ku": "住の江の 岸に寄る波 よるさへや", "shimo_no_ku": "夢の通ひ路人目よくらむ", "translation": "住の江の岸に打ち寄せる波、その「よる」という言葉ではないが、夜までもあなたは夢の中の逢瀬でさえも人目を避けているのだろうか。" },
    { "id": 19, "kami_no_ku": "難波潟 短き蘆の 節の間も", "shimo_no_ku": "逢はでこの世を過ぐしてよとや", "translation": "難波潟の蘆の短い節の間のような、ほんのわずかな間でさえも逢わないで、この世を過ごしてしまえというのですか。" },
    { "id": 20, "kami_no_ku": "わびぬれば 今はた同じ 難波なる", "shimo_no_ku": "身を尽くしても逢はむとぞ思ふ", "translation": "恋に悩み苦しんで、今はもうどうなっても同じこと。難波の海にある澪標のように、この身を滅ぼしてもあなたに逢いたいと思う。" },
    { "id": 21, "kami_no_ku": "今来むと いひしばかりに 長月の", "shimo_no_ku": "有明の月を待ち出でつるかな", "translation": "「すぐに行こう」とあなたが言ったばかりに、九月の長い夜を待ち続け、とうとう有明の月が出てきてしまったことだ。" },
    { "id": 22, "kami_no_ku": "吹くからに 秋の草木の しをるれば", "shimo_no_ku": "むべ山風を嵐といふらむ", "translation": "風が吹くとすぐに秋の草木がしおれてしまうので、なるほど山風を「嵐」と言うのだろう。" },
    { "id": 23, "kami_no_ku": "月見れば ちぢに物こそ 悲しけれ", "shimo_no_ku": "わが身ひとつの秋にはあらねど", "translation": "月を見ると、あれこれと物事が悲しく感じられることだ。私一人だけに訪れた秋ではないのだけれども。" },
    { "id": 24, "kami_no_ku": "このたびは 幣も取りあへず 手向山", "shimo_no_ku": "紅葉の錦神のまにまに", "translation": "このたびの旅は急いでいるので、神に捧げる幣も用意できませんでした。手向山の紅葉の錦を、神よ、御心のままにお受け取りください。" },
    { "id": 25, "kami_no_ku": "名にし負はば 逢坂山の さねかづら", "shimo_no_ku": "人に知られで来るよしもがな", "translation": "逢坂山という名前にちなんださねかずらの蔓を手繰るように、人に知られずにあなたに逢いに来る方法があればよいのだが。" },
    { "id": 26, "kami_no_ku": "小倉山 峰のもみぢ葉 心あらば", "shimo_no_ku": "今一度の行幸を待たなむ", "translation": "小倉山の峰の紅葉よ、もしお前に心があるのなら、もう一度天皇がおいでになるまで、散らずに待っていてほしい。" },
    { "id": 27, "kami_no_ku": "みかの原 わきて流るる いづみ川", "shimo_no_ku": "いつ見きとてか恋しかるらむ", "translation": "みかの原を分けて流れる泉川のように、いつ会ったというので、こんなに恋しいのだろうか。" },
    { "id": 28, "kami_no_ku": "山里は 冬ぞ寂しさ まさりける", "shimo_no_ku": "人目も草もかれぬと思へば", "translation": "山里は冬がいっそう寂しく感じられることだ。人の訪れもなくなり、草木も枯れてしまうと思うと。" },
    { "id": 29, "kami_no_ku": "心あてに 折らばや折らむ 初霜の", "shimo_no_ku": "置きまどはせる白菊の花", "translation": "あてずっぽうに折るなら折ってみようか。初霜が降りて、どれが花か見分けがつかなくなっている白菊の花を。" },
    { "id": 30, "kami_no_ku": "有明の つれなく見えし 別れより", "shimo_no_ku": "暁ばかり憂きものはなし", "translation": "有明の月が空に残っている夜明けの別れのとき、あなたのつれない態度を見て以来、暁ほどつらく憂鬱なものはない。" },
    { "id": 31, "kami_no_ku": "朝ぼらけ 有明の月と 見るまでに", "shimo_no_ku": "吉野の里に降れる白雪", "translation": "夜がほのぼのと明ける頃、有明の月が空に照っているのかと思うほどに、吉野の里に白雪が降り積もっていることだ。" },
    { "id": 32, "kami_no_ku": "山川に 風のかけたる しがらみは", "shimo_no_ku": "流れもあへぬ紅葉なりけり", "translation": "山の中の谷川に、風が架けたしがらみは、流れきれずにいる紅葉であったのだなあ。" },
    { "id": 33, "kami_no_ku": "ひさかたの 光のどけき 春の日に", "shimo_no_ku": "しづ心なく花の散るらむ", "translation": "日の光がのどかに射している春の日に、どうして桜の花は落ち着いた心もなく散っていくのだろうか。" },
    { "id": 34, "kami_no_ku": "誰をかも 知る人にせむ 高砂の", "shimo_no_ku": "松も昔の友ならなくに", "translation": "いったい誰を昔馴染みの友としようか。高砂の松も、昔からの友ではないのだから。" },
    { "id": 35, "kami_no_ku": "人はいさ 心も知らず ふるさとは", "shimo_no_ku": "花ぞ昔の香ににほひける", "translation": "あなたはさて、どう思っているか分からないが、昔なじみのこの里では、梅の花が昔と変わらない香りで咲いていることだ。" },
    { "id": 36, "kami_no_ku": "夏の夜は まだ宵ながら 明けぬるを", "shimo_no_ku": "雲のいづこに月宿るらむ", "translation": "夏の夜はまだ宵のうちだと思っているうちに明けてしまったが、月は雲のどのあたりに宿をとっているのだろうか。" },
    { "id": 37, "kami_no_ku": "白露に 風の吹きしく 秋の野は", "shimo_no_ku": "つらぬきとめぬ玉ぞ散りける", "translation": "白露に風がしきりに吹きつける秋の野は、まるで緒で貫きとめていない玉が散り乱れているようだ。" },
    { "id": 38, "kami_no_ku": "忘らるる 身をば思はず 誓ひてし", "shimo_no_ku": "人の命の惜しくもあるかな", "translation": "忘れられてしまう我が身のことはどうでもよいが、神に誓ったあなたの命が、罰せられて失われるのが惜しいことだ。" },
    { "id": 39, "kami_no_ku": "浅茅生の 小野の篠原 しのぶれど", "shimo_no_ku": "あまりてなどか人の恋しき", "translation": "浅茅が生えている小野の篠原のように、恋心を忍んではいるが、忍びきれずにどうしてこんなにもあの人が恋しいのだろうか。" },
    { "id": 40, "kami_no_ku": "しのぶれど 色に出でにけり わが恋は", "shimo_no_ku": "物や思ふと人の問ふまで", "translation": "心に秘めていたけれど、顔色に出てしまったようだ、私の恋は。「何か物思いでもしているのですか」と人に尋ねられるほどに。" },
    { "id": 41, "kami_no_ku": "恋すてふ わが名はまだき 立ちにけり", "shimo_no_ku": "人知れずこそ思ひそめしか", "translation": "恋をしているという私の噂が、早くも立ってしまった。誰にも知られないように、ひそかに思い始めたばかりなのに。" },
    { "id": 42, "kami_no_ku": "契りきな かたみに袖を しぼりつつ", "shimo_no_ku": "末の松山波越さじとは", "translation": "約束しましたよね、互いに涙で袖を絞りながら。末の松山を波が越すことがないように、二人の愛も変わらないと。" },
    { "id": 43, "kami_no_ku": "逢ひ見ての のちの心に くらぶれば", "shimo_no_ku": "昔は物を思はざりけり", "translation": "あなたに逢ってからの今の恋しい気持ちに比べれば、昔の物思いなど、何も思っていなかったのと同じだった。" },
    { "id": 44, "kami_no_ku": "逢ふことの 絶えてしなくは なかなかに", "shimo_no_ku": "人をも身をも恨みざらまし", "translation": "あなたに逢うことが全くなかったならば、かえってあなたのことも自分のことも恨んだりはしなかったでしょうに。" },
    { "id": 45, "kami_no_ku": "あはれとも いふべき人は 思ほえで", "shimo_no_ku": "身のいたづらになりぬべきかな", "translation": "しみじみと気の毒だと言ってくれるような人も思い浮かばないまま、私はむなしく死んでしまうのだろうか。" },
    { "id": 46, "kami_no_ku": "由良の門を 渡る舟人 かぢを絶え", "shimo_no_ku": "ゆくへも知らぬ恋の道かな", "translation": "由良の海峡を渡る舟人が梶を失って、どこへ行くとも知れず漂っているように、私の恋の行方もどうなるか分からないことだ。" },
    { "id": 47, "kami_no_ku": "八重むぐら 茂れる宿の さびしきに", "shimo_no_ku": "人こそ見えね秋は来にけり", "translation": "幾重にもむぐらが茂っている寂しいこの家に、誰も訪れる人はいないが、それでも秋はやって来たのだなあ。" },
    { "id": 48, "kami_no_ku": "風をいたみ 岩打つ波の おのれのみ", "shimo_no_ku": "くだけて物を思ふころかな", "translation": "風が激しいので、岩に打ち当たる波が自分だけ砕け散るように、私だけが心を砕いて物思いにふけるこの頃だなあ。" },
    { "id": 49, "kami_no_ku": "みかき守 衛士のたく火の 夜は燃え", "shimo_no_ku": "昼は消えつつ物をこそ思へ", "translation": "御所の門番が焚く篝火が、夜は燃え、昼は消えるように、私の恋心も夜は燃え上がり、昼は消え入りそうになりながら物思いにふけっている。" },
    { "id": 50, "kami_no_ku": "君がため 惜しからざりし 命さへ", "shimo_no_ku": "長くもがなと思ひけるかな", "translation": "あなたのためなら惜しくなかった命でさえも、逢うことができた今となっては、長くありたいと思うようになったことだ。" },
    { "id": 51, "kami_no_ku": "かくとだに えやはいぶきの さしも草", "shimo_no_ku": "さしも知らじな燃ゆる思ひを", "translation": "これほどまでに恋い慕っているとさえ、あなたに言うことはできない。伊吹山のさしも草のように、燃えるような私の思いを、あなたはご存じないでしょうね。" },
    { "id": 52, "kami_no_ku": "明けぬれば 暮るるものとは 知りながら", "shimo_no_ku": "なほうらめしき朝ぼらけかな", "translation": "夜が明ければまた日が暮れるものとは知っていながら、やはり恨めしい夜明けだなあ。" },
    { "id": 53, "kami_no_ku": "嘆きつつ ひとり寝る夜の 明くる間は", "shimo_no_ku": "いかに久しきものとかは知る", "translation": "あなたが来てくれないことを嘆きながら、ひとりで寝る夜が明けるまでの間が、どれほど長いものか、あなたはご存じないでしょう。" },
    { "id": 54, "kami_no_ku": "忘れじの 行く末までは かたければ", "shimo_no_ku": "今日を限りの命ともがな", "translation": "「忘れまい」というあなたの言葉が、遠い将来まで続くことは難しいので、いっそ今日限りで私の命が終わってしまえばよいのに。" },
    { "id": 55, "kami_no_ku": "滝の音は 絶えて久しく なりぬれど", "shimo_no_ku": "名こそ流れてなほ聞こえけれ", "translation": "滝の水の音は絶えてから久しくなってしまったが、その名声は流れ伝わって、今なお世間に聞こえていることだ。" },
    { "id": 56, "kami_no_ku": "あらざらむ この世のほかの 思ひ出に", "shimo_no_ku": "今一度の逢ふこともがな", "translation": "もうすぐこの世からいなくなってしまうであろう私の、あの世への思い出として、もう一度だけあなたにお逢いしたいものだ。" },
    { "id": 57, "kami_no_ku": "めぐりあひて 見しやそれとも わかぬ間に", "shimo_no_ku": "雲隠れにし夜半の月かな", "translation": "久しぶりにめぐり逢って、見たのが果たしてあなただったのかどうかも分からないうちに、雲に隠れてしまった夜半の月のように、あなたは去ってしまったのだなあ。" },
    { "id": 58, "kami_no_ku": "有馬山 ゐなの笹原 風吹けば", "shimo_no_ku": "いでそよ人を忘れやはする", "translation": "有馬山の近くの猪名の笹原に風が吹くと、そよそよと音がするように、どうしてあなたのことを忘れられましょうか、いや、忘れはしません。" },
    { "id": 59, "kami_no_ku": "やすらはで 寝なましものを さ夜更けて", "shimo_no_ku": "かたぶくまでの月を見しかな", "translation": "ためらわずに寝てしまえばよかったものを。あなたが来ると信じて待っていたので、とうとう西に傾くまで月を見てしまったことだ。" },
    { "id": 60, "kami_no_ku": "大江山 いく野の道の 遠ければ", "shimo_no_ku": "まだふみも見ず天の橋立", "translation": "大江山を越え、生野を通る道のりは遠いので、まだ母のいる天の橋立の地を踏んだこともなく、母からの手紙も見ていません。" },
    { "id": 61, "kami_no_ku": "いにしへの 奈良の都の 八重桜", "shimo_no_ku": "けふ九重ににほひぬるかな", "translation": "昔の奈良の都で咲いていた八重桜が、今日は宮中でひときわ美しく咲き誇っていることだ。" },
    { "id": 62, "kami_no_ku": "夜をこめて 鳥のそら音は はかるとも", "shimo_no_ku": "よに逢坂の関は許さじ", "translation": "夜がまだ明けないうちに、鶏の鳴き真似をして人をだまそうとしても、函谷関ならともかく、この逢坂の関は決して許しませんよ。" },
    { "id": 63, "kami_no_ku": "今はただ 思ひ絶えなむ とばかりを", "shimo_no_ku": "人づてならで言ふよしもがな", "translation": "今はもう、あなたへの思いをきっぱりと諦めてしまおうということだけを、人づてではなく直接あなたに言う方法があればよいのだが。" },
    { "id": 64, "kami_no_ku": "朝ぼらけ 宇治の川霧 たえだえに", "shimo_no_ku": "あらはれわたる瀬々の網代木", "translation": "夜がほのぼのと明ける頃、宇治川の川霧がとぎれとぎれになる中から、あちこちの瀬に仕掛けられた網代木が現れてくることだ。" },
    { "id": 65, "kami_no_ku": "恨みわび ほさぬ袖だに あるものを", "shimo_no_ku": "恋に朽ちなむ名こそ惜しけれ", "translation": "あなたを恨み、嘆き悲しんで、涙で乾く間もない袖さえあるというのに、その上、恋の噂で朽ち果ててしまうような評判が立つのが残念でならない。" },
    { "id": 66, "kami_no_ku": "もろともに あはれと思へ 山桜", "shimo_no_ku": "花よりほかに知る人もなし", "translation": "私と一緒に、しみじみと趣深いものだと思っておくれ、山桜よ。お前より他に私の心を分かってくれる者はいないのだから。" },
    { "id": 67, "kami_no_ku": "春の夜の 夢ばかりなる 手枕に", "shimo_no_ku": "かひなく立たむ名こそ惜しけれ", "translation": "春の夜の夢のようにはかない手枕で、つまらない噂が立つことになったら、それが残念でならない。" },
    { "id": 68, "kami_no_ku": "心にも あらでうき世に ながらへば", "shimo_no_ku": "恋しかるべき夜半の月かな", "translation": "心ならずも、このつらい世に生きながらえていたならば、きっと恋しく思い出すであろう、この夜半の月だなあ。" },
    { "id": 69, "kami_no_ku": "嵐吹く 三室の山の もみぢ葉は", "shimo_no_ku": "竜田の川の錦なりけり", "translation": "嵐が吹き荒れる三室山の紅葉は、竜田川の錦であったのだなあ。" },
    { "id": 70, "kami_no_ku": "寂しさに 宿を立ち出でて ながむれば", "shimo_no_ku": "いづこも同じ秋の夕暮れ", "translation": "あまりの寂しさに、家を出てあたりを眺めると、どこも同じように寂しい秋の夕暮れであったことだ。" },
    { "id": 71, "kami_no_ku": "夕されば 門田の稲葉 おとづれて", "shimo_no_ku": "蘆のまろ屋に秋風ぞ吹く", "translation": "夕方になると、門の前の田の稲葉に風が訪れて、蘆で葺いた粗末な小屋に秋風が吹き渡ることだ。" },
    { "id": 72, "kami_no_ku": "音に聞く 高師の浜の あだ波は", "shimo_no_ku": "かけじや袖のぬれもこそすれ", "translation": "噂に名高い高師の浜の、いたずらに寄せては返す波には、袖をかけまい。濡れてしまったら大変だから。" },
    { "id": 73, "kami_no_ku": "高砂の 尾の上の桜 咲きにけり", "shimo_no_ku": "外山の霞立たずもあらなむ", "translation": "はるか遠い山の峰の桜が咲いたことだ。麓の山の霞よ、どうか立たないでほしい。" },
    { "id": 74, "kami_no_ku": "憂かりける 人を初瀬の 山おろしよ", "shimo_no_ku": "はげしかれとは祈らぬものを", "translation": "つれないあの人の心が、初瀬の山おろしのように、もっと激しくなれとは祈らなかったものを。" },
    { "id": 75, "kami_no_ku": "契りおきし させもが露を 命にて", "shimo_no_ku": "あはれ今年の秋もいぬめり", "translation": "あなたが約束してくださった、あのさしも草の露のような言葉を命綱にして待っていましたが、ああ、今年の秋も過ぎ去っていくようです。" },
    { "id": 76, "kami_no_ku": "わたの原 漕ぎ出でてみれば ひさかたの", "shimo_no_ku": "雲居にまがふ沖つ白波", "translation": "大海原に漕ぎ出して見渡すと、はるか沖の白波が、まるで大空の雲と見間違えるほどであることだ。" },
    { "id": 77, "kami_no_ku": "瀬をはやみ 岩にせかるる 滝川の", "shimo_no_ku": "われても末に逢はむとぞ思ふ", "translation": "川の瀬の流れが速いので、岩にせき止められた急流が、いったん分かれてもまた一つになるように、あなたと今は離れても、将来は必ず再会しようと思う。" },
    { "id": 78, "kami_no_ku": "淡路島 かよふ千鳥の 鳴く声に", "shimo_no_ku": "幾夜寝覚めぬ須磨の関守", "translation": "淡路島から渡ってくる千鳥の鳴く声に、幾夜目を覚ましたことだろうか、須磨の関守は。" },
    { "id": 79, "kami_no_ku": "秋風に たなびく雲の 絶え間より", "shimo_no_ku": "もれ出づる月の光にぞありける", "translation": "秋風に吹かれてたなびく雲の切れ間から、漏れ出てくる月の光であったのだなあ。" },
    { "id": 80, "kami_no_ku": "長からむ 心も知らず 黒髪の", "shimo_no_ku": "乱れてけさは物をこそ思へ", "translation": "末長く私を愛してくださるあなたの心も分からないまま、私の黒髪が乱れているように、心も乱れて今朝は物思いにふけっている。" },
    { "id": 81, "kami_no_ku": "ほととぎす 鳴きつる方を ながむれば", "shimo_no_ku": "ただ有明の月ぞ残れる", "translation": "ほととぎすが鳴いた方を眺めると、そこにはただ有明の月が残っているだけであった。" },
    { "id": 82, "kami_no_ku": "思ひわび さても命は あるものを", "shimo_no_ku": "憂きにたへぬは涙なりけり", "translation": "恋の悩みでつらい思いをしながらも、命だけはまだあるというのに、このつらさに耐えきれずに流れ落ちるのは涙であったのだなあ。" },
    { "id": 83, "kami_no_ku": "世の中よ 道こそなけれ 思ひ入る", "shimo_no_ku": "山の奥にも鹿ぞ鳴くなる", "translation": "この世の中には、逃れる道などないのだなあ。深く思いつめて分け入ったこの山の奥でも、悲しげに鳴く鹿の声が聞こえてくる。" },
    { "id": 84, "kami_no_ku": "ながらへば またこのごろや しのばれむ", "shimo_no_ku": "憂しと見し世ぞ今は恋しき", "translation": "生きながらえていれば、また今のこのつらい時期が懐かしく思い出されるのだろうか。昔はつらいと思っていた世の中も、今となっては恋しいのだから。" },
    { "id": 85, "kami_no_ku": "夜もすがら 物思ふころは 明けやらで", "shimo_no_ku": "閨のひまさへつれなかりけり", "translation": "一晩中、恋の物思いにふけっているこの頃は、なかなか夜が明けず、寝室の隙間さえもがつれなく感じられることだ。" },
    { "id": 86, "kami_no_ku": "嘆けとて 月やは物を 思はする", "shimo_no_ku": "かこち顔なるわが涙かな", "translation": "嘆き悲しめと、月が私に物思いをさせるのだろうか、いやそうではない。すべて月のせいであるかのように流れる私の涙だなあ。" },
    { "id": 87, "kami_no_ku": "村雨の 露もまだひぬ 真木の葉に", "shimo_no_ku": "霧立ちのぼる秋の夕暮れ", "translation": "にわか雨の露もまだ乾かない真木の葉に、霧が立ちのぼっていく秋の夕暮れだなあ。" },
    { "id": 88, "kami_no_ku": "難波江の 蘆のかりねの ひとよゆゑ", "shimo_no_ku": "身を尽くしてや恋ひわたるべき", "translation": "難波の入り江の蘆の刈り根のような、ほんの一夜の仮寝のために、この身を滅ぼすほどに恋い慕い続けなければならないのだろうか。" },
    { "id": 89, "kami_no_ku": "玉の緒よ 絶えなば絶えね ながらへば", "shimo_no_ku": "忍ぶることの弱りもぞする", "translation": "私の命よ、絶えるなら絶えてしまえ。このまま生きながらえていれば、堪え忍ぶ心が弱ってしまうといけないから。" },
    { "id": 90, "kami_no_ku": "見せばやな 雄島の海人の 袖だにも", "shimo_no_ku": "ぬれにぞぬれし色はかはらず", "translation": "見せてあげたいものだ。雄島の漁師の袖でさえ、涙で濡れに濡れて、色が変わるほどだというのに、私の袖は血の涙で色が変わってしまった。" },
    { "id": 91, "kami_no_ku": "きりぎりす 鳴くや霜夜の さむしろに", "shimo_no_ku": "衣かたしきひとりかも寝む", "translation": "こおろぎが鳴いている霜の降る寒い夜に、むしろを敷いて、衣の片袖を下に敷いて、独り寂しく寝るのだろうか。" },
    { "id": 92, "kami_no_ku": "わが袖は 潮干に見えぬ 沖の石の", "shimo_no_ku": "人こそ知らね乾く間もなし", "translation": "私の袖は、潮が引いても決して現れることのない沖の石のように、誰も知らないだろうが、涙で乾く間もない。" },
    { "id": 93, "kami_no_ku": "世の中は 常にもがもな 渚漕ぐ", "shimo_no_ku": "海人の小舟の綱手かなしも", "translation": "世の中は、いつまでも変わらないものであってほしいなあ。渚を漕いでいく漁師の小舟の、その綱手を見ていると、しみじみと趣深い。" },
    { "id": 94, "kami_no_ku": "み吉野の 山の秋風 小夜更けて", "shimo_no_ku": "ふるさと寒く衣打つなり", "translation": "吉野の山の秋風が夜更けに吹き渡り、故郷の村は寒々と感じられ、砧を打つ音が聞こえてくる。" },
    { "id": 95, "kami_no_ku": "おほけなく 憂き世の民に おほふかな", "shimo_no_ku": "わが立つ杣に墨染の袖", "translation": "身の程もわきまえず、つらい世の中の民の上に覆いかけることだ。私が修行している比叡山に住む僧侶の、この墨染めの袖を。" },
    { "id": 96, "kami_no_ku": "花さそふ 嵐の庭の 雪ならで", "shimo_no_ku": "ふりゆくものはわが身なりけり", "translation": "桜の花を誘って散らす嵐の日の庭は、まるで雪が降っているようだが、本当に古りゆくものは、この我が身であったのだなあ。" },
    { "id": 97, "kami_no_ku": "来ぬ人を 松帆の浦の 夕なぎに", "shimo_no_ku": "焼くや藻塩の身もこがれつつ", "translation": "なかなか来ない人を待ち焦がれて、松帆の浦の夕凪の時に焼く藻塩のように、私の身も恋い焦がれていることだ。" },
    { "id": 98, "kami_no_ku": "風そよぐ ならの小川の 夕暮れは", "shimo_no_ku": "みそぎぞ夏のしるしなりける", "translation": "風がそよそよと楢の葉を揺らすならの小川の夕暮れは、もう秋の気配だが、夏越の祓えのみそぎだけが、まだ夏であることを示している。" },
    { "id": 99, "kami_no_ku": "人もをし 人も恨めし あぢきなく", "shimo_no_ku": "世を思ふゆゑに物思ふ身は", "translation": "ある時は人がいとおしく、またある時は人が恨めしく、つまらない世の中だと思うせいで、物思いにふけるこの身は。" },
    { "id": 100, "kami_no_ku": "ももしきや 古き軒端の しのぶにも", "shimo_no_ku": "なほあまりある昔なりけり", "translation": "宮中の古い軒先に生えているしのぶ草を見ても、なお余りあるほどに昔のことが思い出されることだよ。" }
];

const setupContainer = document.getElementById('setup-container');
const quizContainer = document.getElementById('quiz-container');
const scoreContainer = document.getElementById('score-container');
const poemSelection = document.getElementById('poem-selection');
const startRandomButton = document.getElementById('start-random-button');
const startSelectedButton = document.getElementById('start-selected-button');
const questionNumber = document.getElementById('question-number');
const kamiNoKu = document.getElementById('kami-no-ku');
const answerOptions = document.getElementById('answer-options');
const resultMessage = document.getElementById('result-message');
const correctAnswerContainer = document.getElementById('correct-answer-container');
const correctKamiNoKu = document.getElementById('correct-kami-no-ku');
const correctShimoNoKu = document.getElementById('correct-shimo-no-ku');
const modernTranslation = document.getElementById('modern-translation');
const nextQuestion = document.getElementById('next-question');
const score = document.getElementById('score');
const restartButton = document.getElementById('restart-button');
const correctSound = document.getElementById('correct-sound');

let quizPoems = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;

function init() {
    poemSelection.innerHTML = ''; // Clear existing content
    poems.forEach(poem => {
        const container = document.createElement('div');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `poem-${poem.id}`;
        checkbox.value = poem.id;
        checkbox.addEventListener('change', updateSelectedCount);

        const label = document.createElement('label');
        label.htmlFor = `poem-${poem.id}`;
        label.innerHTML = `<b>${poem.id}.</b> ${poem.kami_no_ku}<br>${poem.shimo_no_ku}`;

        container.appendChild(checkbox);
        container.appendChild(label);
        poemSelection.appendChild(container);
    });
    updateSelectedCount();
}

function updateSelectedCount() {
    const selectedCount = poemSelection.querySelectorAll('input:checked').length;
    startSelectedButton.textContent = `選んだ${selectedCount}首でクイズを始める`;
    startSelectedButton.disabled = selectedCount === 0;
}

function startQuiz(selectedPoems) {
    if (selectedPoems.length === 0) {
        alert('クイズを始めるには、少なくとも1首選んでください。');
        return;
    }
    quizPoems = selectedPoems.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    correctAnswers = 0;
    setupContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    scoreContainer.classList.add('hidden');
    showQuestion();
}

function showQuestion() {
    const currentPoem = quizPoems[currentQuestionIndex];
    questionNumber.textContent = `第${currentQuestionIndex + 1}問`;
    kamiNoKu.textContent = currentPoem.kami_no_ku;

    // Create answer options
    const options = createAnswerOptions(currentPoem);

    answerOptions.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('answer-button');
        button.addEventListener('click', () => checkAnswer(button, option, currentPoem.shimo_no_ku));
        answerOptions.appendChild(button);
    });

    resultMessage.textContent = '';
    correctAnswerContainer.classList.add('hidden');
    nextQuestion.classList.add('hidden');
}

function createAnswerOptions(correctPoem) {
    let options = [correctPoem.shimo_no_ku];
    const wrongPoems = poems.filter(p => p.id !== correctPoem.id);

    while (options.length < 4) {
        const randomPoem = wrongPoems[Math.floor(Math.random() * wrongPoems.length)];
        if (!options.includes(randomPoem.shimo_no_ku)) {
            options.push(randomPoem.shimo_no_ku);
        }
    }

    return options.sort(() => Math.random() - 0.5); // Shuffle options
}

function checkAnswer(button, selectedAnswer, correctAnswer) {
    // Disable all buttons
    const buttons = answerOptions.querySelectorAll('.answer-button');
    buttons.forEach(btn => btn.disabled = true);

    if (selectedAnswer === correctAnswer) {
        resultMessage.textContent = '正解！';
        button.classList.add('correct');
        correctSound.play();
        correctAnswers++;
    } else {
        resultMessage.textContent = '不正解…';
        button.classList.add('incorrect');
        // Highlight the correct answer
        buttons.forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.classList.add('correct');
            }
        });
    }

    showCorrectAnswer();
}

function showCorrectAnswer() {
    const poem = quizPoems[currentQuestionIndex];
    correctKamiNoKu.textContent = poem.kami_no_ku;
    correctShimoNoKu.textContent = poem.shimo_no_ku;
    modernTranslation.textContent = `現代語訳：${poem.translation}`;
    correctAnswerContainer.classList.remove('hidden');
    nextQuestion.classList.remove('hidden');
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizPoems.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    quizContainer.classList.add('hidden');
    scoreContainer.classList.remove('hidden');
    score.textContent = `${quizPoems.length}問中${correctAnswers}問正解です！`;
}

startRandomButton.addEventListener('click', () => {
    const randomPoems = poems.sort(() => Math.random() - 0.5).slice(0, 10);
    startQuiz(randomPoems);
});

startSelectedButton.addEventListener('click', () => {
    const selectedPoemIds = Array.from(poemSelection.querySelectorAll('input:checked')).map(input => parseInt(input.value));
    const selectedPoems = poems.filter(poem => selectedPoemIds.includes(poem.id));
    startQuiz(selectedPoems);
});

nextQuestion.addEventListener('click', showNextQuestion);
restartButton.addEventListener('click', () => {
    setupContainer.classList.remove('hidden');
    quizContainer.classList.add('hidden');
    scoreContainer.classList.add('hidden');
    // Re-initialize selection screen in case user wants to choose different poems
    init();
});

// Initial load
init();
