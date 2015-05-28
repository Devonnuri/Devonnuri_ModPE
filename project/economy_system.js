/* EconomySystem By Devonnuri ver 0.0.1.3
  * Copyright Devonnuri 2015 All rights reserved
  */
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var money = 0;

function newLevel(){
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				var window = new android.widget.PopupWindow();
				var layout = new android.widget.RelativeLayout(ctx);
				var moneyView = new android.widget.TextView(ctx);
				moneyView.setText(money);
				moneyView.setTextSize(android.util.TypedValue.COMPLEX_UNIT_PX, dip2px(15));
				layout.addView(moneyView);
				window.setContentView(layout);
			}catch(e){
				print(e);
			}
		}
	}));
}

function dip2px(dip){
	return parseInt(dip * ctx.getResources().getDisplayMetrics().density + 0.5);
}
