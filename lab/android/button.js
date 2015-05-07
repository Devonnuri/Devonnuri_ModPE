var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var dialog = new android.app.AlertDialog.Builder(ctx);
var window = null;
 
function dip2px(dips) {
    return parseInt(dips * ctx.getResources().getDisplayMetrics().density + 0.5);
}
 
function toast(msg) {
    ctx.runOnUiThread(new java.lang.Runnable({run: function(){
        android.widget.Toast.makeText(ctx, msg, android.widget.Toast.LENGTH_LONG).show();
    }}));
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
                shopBtn.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function()
                    {
                        dialog.setTitle("상점");
                        dialog.setMessage("안녕하세요 스크룸트입니다.");
                        dialog.create();
                        dialog.show();
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
 
function dip2px(dips) {
    return parseInt(dips * ctx.getResources().getDisplayMetrics().density + 0.5);
}
