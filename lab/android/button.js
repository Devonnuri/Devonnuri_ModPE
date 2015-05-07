var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var dialog = new android.app.AlertDialog.Builder(ctx);
var window = null;
 
function dip2px(dips) {
    return parseInt(dips * ctx.getResources().getDisplayMetrics().density + 0.5);
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
                shopBtn.setText("Button");
                shopBtn.setTextSize(android.util.TypedValue.COMPLEX_UNIT_PX, dip2px(20));
                shopBtn.setLayoutParams(new android.widget.LinearLayout.LayoutParams(dip2px(60),dip2px(60)));
                shopBtn.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function()
                    {
                    	print("You clicked the Button");
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
                print(e);
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

function dip2px(dips) {
    return parseInt(dips * ctx.getResources().getDisplayMetrics().density + 0.5);
}
