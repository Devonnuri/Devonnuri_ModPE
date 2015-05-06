/*
	이름: "사라진 다이아 철 금" 전용스크립트
	비고:
	"사라진 다이아 철금" 탈출맵의 전용스크립트입니다.
	용도 이외에 쓰시면 아무 쓸모없는 스크립트가 됩니다.
	제작자: 뎁온누리 (gmltjd1224@naver.com)
	Copyright ⓒ 뎁온누리 2014-2015 all rights reserved
*/

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

//path
var sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
var resourceDir = sdcard + "/games/com.mojang/dachulgum/";
var fontDir = resourceDir + "font/";
var soundDir = resourceDir + "sound/";

//strings
var welcome1 = "안녕하세요 '사라진 다이아 철 금' 탈출맵에 오신것을 환영합니다!";
var welcome2 = "준비가 다 되시면 앞에있는 목재블럭을 부서주시길 바랍니다."

var setting1= "본격적으로 설정을 맞춰 주겠습니다.";
var setting2="설정은 표지판에 써있습니다. 참고 해주시길 부탁합니다.";
var setting3="스토리는 흙 블럭을 차례로 부수면서 진행 부탁바랍니다^^";

if(!java.io.File(resourceDir).exists()) java.io.File(resourceDir).mkdirs();



//variable
var lev =0;
var exp = 0;
var level;

function newLevel()
{
	var prestory[] = readURL("http://devonnuri.esy.es/dachulgum/prestory.txt").split("\n");
	var mediaPlayer = new android.media.MediaPlayer();
	mediaPlayer.setDataSource(soundDir + "Gymnopedie no 1.mp3");
	mediaPlayer.prepare();

	exp = 10;
	Block.defineBlock(247,"옵시디언 포탈",[['obsidian', 0], ['obsidian', 0], ['diamond_block', 0], ['iron_block', 0], ['gold_block', 0]], 247,false,0);
	Item.addShapedRecipe(247,1,0,["AAA","BCD","BCD"],["A",49,0,"B",42,0,"C",41,0,"D",57,0]);
	clientMessage(welcome1);
	clientMessage(welcome2);
	Level.setTile(952, 4, 18, 157);
	Level.setNightMode(false);
}

function destroyBlock(x,y,z)
{
	//메인
	if (x==952 && y==4 && z==18)
	{
		Entity.setPosition(Player.getEntity(), 953, 7, 150);
		Level.setTile(952, 4, 18, 157);
		clientMessage(ChatColor.BLUE+"[도움말]"+ChatColor.WHITE+setting1);
		clientMessage(setting2);
		clientMessage(setting3);
		Level.setTile(949, 6, 150, 3); 
		Level.setTile(949, 6, 151, 3);
		Level.setTile(949, 6, 152, 3);
		Level.setTile(949, 6, 153, 3);
		Level.setTile(949, 6, 154, 3);
		Level.setTile(949, 6, 155, 3);
		Level.setTile(949, 6, 156, 3);
		Level.setTile(949, 6, 157, 3);
		Level.setTile(949, 6, 158, 3);
		Level.setTile(949, 6, 159, 3);
		Level.setTile(952, 5, 193, 162, 1);
	}

	if(x==949 && y==6)
	{
		switch(z)
		{
			case 150: clientMessage(ChatColor.BLUE+"[스토리]"+ChatColor.WHITE + prestory[1]); break;
			case 151: clientMessage(ChatColor.BLUE+"[스토리]"+ChatColor.WHITE + prestory[2]); break;
			case 152: clientMessage(ChatColor.BLUE+"[스토리]"+ChatColor.WHITE + prestory[3]); break;
			case 153: clientMessage(ChatColor.BLUE+"[스토리]"+ChatColor.WHITE + prestory[4]); break;
			case 154: clientMessage(ChatColor.BLUE+"[스토리]"+ChatColor.WHITE + prestory[5]); break;
			case 155: clientMessage(ChatColor.BLUE+"[스토리]"+ChatColor.WHITE + prestory[6]); break;
			case 156: clientMessage(ChatColor.BLUE+"[스토리]"+ChatColor.WHITE + prestory[7]); break;
			case 157: clientMessage(ChatColor.BLUE+"[스토리]"+ChatColor.WHITE + prestory[8]); break;
			case 158: clientMessage(ChatColor.BLUE+"[스토리]"+ChatColor.WHITE + prestory[9]); break;
			case 159: clientMessage(ChatColor.BLUE+"[스토리]"+ChatColor.WHITE + prestory[10]); break;
		}
		Level.setTile(949, 6, 150, 3); 
		Level.setTile(949, 6, 151, 3);
		Level.setTile(949, 6, 152, 3);
		Level.setTile(949, 6, 153, 3);
		Level.setTile(949, 6, 154, 3);
		Level.setTile(949, 6, 155, 3);
		Level.setTile(949, 6, 156, 3);
		Level.setTile(949, 6, 157, 3);
		Level.setTile(949, 6, 158, 3);
		Level.setTile(949, 6, 159, 3);
	}
	if(x==952 && y==5 && z==193)
	{
		Level.setTile(967,6,199);
		Entity.setPosition(Player.getEntity(), 965, 7, 202);
	}
}

function selectLevelHook()
{
	ctx.runOnUiThread(new java.lang.Runnable(
	{
		run: function()
		{
			try
			{
				window = new android.widget.PopupWindow();
				var layout = new android.widget.RelativeLayout(ctx);
				var shopBtn = new android.widget.Button(ctx);
				shopBtn.setText("상점");
				shopBtn.setTextSize(android.util.TypedValue.COMPLEX_UNIT_PX, dip2px(20));
				shopBtn.setLayoutParams(new android.widget.LinearLayout.LayoutParams(dip2px(60),dip2px(60)));
				shopBtn.setPadding(-dip2px(8), -dip2px(8), -dip2px(8), -dip2px(8));

				shopBtn.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function()
					{
						showShop();
					}
				}));
				layout.addView(shopBtn);
				window.setContentView(layout);
				window.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				window.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,0,0);
			}
			catch(e)
			{
				toast("error"+e);
			}
		}
	}));
}


function leaveGame()
{
	if(window != null)
	{
		ctx.runOnUiThread(new java.lang.Runnable(
		{
			run: function()
			{
				try
				{
					if(window != null) window.dismiss();
					window = null;
				}
				catch(e)
				{
					print(e);
				}
			}
		}));
	}
}

function modTick()
{
	//toast("SPAM!");
}

/*
개인 함수가 집합되어있는 곳입니다.
Now I will write Custom Functions. :)
*/

//function by toonraon(toonraon@naver.com)
function toast(msg) {
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function()
		{
			try
			{
				android.widget.Toast.makeText(ctx, msg.toString(), android.widget.Toast.LENGTH_SHORT).show();
			}
			catch(e)
			{
				print(e);
			}
		}
	}));
}

//function by toonraon(toonraon@naver.com)
function dip2px(dips) {
	return parseInt(dips * ctx.getResources().getDisplayMetrics().density + 0.5);
}

//function by toonraon(toonraon@naver.com)
function readURL(url) {
var URLContent = "";
var bufferedReader = new java.io.BufferedReader(new java.io.InputStreamReader(java.net.URL(url).openStream()));

var temp = "";
while ((temp = bufferedReader.readLine()) != null) {
  URLContent += (URLContent == "" ? temp :  "\n" + temp);
}
bufferedReader.close();

return URLContent;
}



//function by Astro
function downloadURL()
{
	try
	{
		var downloadManager = new android.app.DownloadManager.Request(new android.net.Uri.parse(url));
		downloadManager.setTitle(file);
		downloadManager.setNotificationVisibility(1);
		downloadManager.setDestinationInExternalPublicDir("/Astro/" + Data.script + "/", file);
		ctx.getSystemService(android.content.Context.DOWNLOAD_SERVICE).enqueue(downloadManager);
	}
	catch(error)
	{
		toast("< " + Data.script + " >\n파일을 다운로드 할 수 없습니다. 인터넷에 연결해 주세요.");
	}
}

//다이얼로그 함수

function showShop()
{
	ctx.runOnUiThread(new java.lang.Runnable()
	{
		run: function(){ 
			try{
				var layout = new android.widget.LinearLayout(ctx);
				layout.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1,-1));

				var window = new android.widget.PopupWindow(layout,-1,-1);

				var shopLayout =  new android.widget.LinearLayout(ctx);
				shopLayout.setPadding(dip2px(10), dip2px(10), dip2px(10), dip2px(10));
				shopLayout.setOrientation(1);
				shopLayout.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth() * 3 / 4, -1));

				var titleView = new android.widget.TextView(ctx);
				titleView.setPadding(dip2px(5), dip2px(5), dip2px(5), dip2px(5));
				titleView.setText(readURL("http://"));
				titleView.setTypeface(new android.graphics.Typeface.createFromFile(java.io.File(fontDir + "NanumBarunGothicBold.ttf")));
				titleView.setTextSize(sp, 30);
				titleView.setTextColor(android.graphics.Color.WHITE);

				var cc = new android.widget.EditText(ctx);
				shop
				var ct = new android.widget.EditText(ctx);
				var cn = new android.widget.EditText(ctx);
				var btn = new android.widget.Button(ctx);
				btn.setText("선택");
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
				layout.addView(cc);
				layout.addView(ct);
				layout.addView(cn);
				layout.addView(btn);
				cc.setHint("새로운 아이템코드");
				ct.setHint("디스플레이 아이템");
				cn.setHint("아이템 이름");
				var dialog = new android.app.Dialog(ctx);
				dialog.setContentView(layout);
				dialog.setTitle("상점");
				GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
				GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
				GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
				dialog.show();

				var progressBar = new ProgressBar(ctx, null, android.R.attr.progressBarStyleLarge);
				progressBar.setMax(20);
				progressBar.setProgress(0);
				btn.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(view){
						toast("이용해주셔서 감사합니다!");
					}
				});

			}
			catch (e)
			{
				clientMessage ("Error: "+e);
			}
		}
	});
}


/*
Recycling Bin

titleView.setTypeface(new android.graphics.Typeface.createFromFile(java.io.File(fontDir + "NanumBarunGothicBold.ttf")));

try{
	var downloadManager = new android.app.DownloadManager.Request(new android.net.Uri.parse(url));
	downloadManager.setTitle(file);
	downloadManager.setNotificationVisibility(1);
	downloadManager.setDestinationInExternalPublicDir("/Astro/" + Data.script + "/", file);
	ctx.getSystemService(android.content.Context.DOWNLOAD_SERVICE).enqueue(downloadManager);
} catch(error) {
	toast("< " + Data.script + " >\n파일을 다운로드 할 수 없습니다. 인터넷에 연결해 주세요.");
}
*/
