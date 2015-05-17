/* EconomySystem By Devonnuri ver 0.0.1.1
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
				moneyView.TextSize(android.util.TypedValue.COMPLEX_UNIT_SP,5);
				layout.addView(moneyView);
				window.setContentView(layout);
				window.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				window.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			}catch(e){
				print(e);
			}
		}
	}));
}

function dip2px(dip){
	return parseInt(dip * ctx.getResources().getDisplayMetrics().density + 0.5);
}