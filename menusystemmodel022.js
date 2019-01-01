function menusystemmodel022Show(x, y, mnuname) {
	z_index++;
	var MenuSystemItems = null;
	var miindex= 0;
	var index= z_index;

	MenuSystemItems = new Array();
	miindex=0;
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem1",0,0,89,32,0,0,null,0,null,null,null,null,projectroot+"/menusystemmodel022/menusystemitem0.gif",projectroot+"/menusystemmodel022/menusystemitem0_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem2",89,0,120,32,0,0,null,0,null,new LMBranch("0",projectroot+"home_user.html"),null,null,projectroot+"/menusystemmodel022/menusystemitem1.gif",projectroot+"/menusystemmodel022/menusystemitem1_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem3",209,0,120,32,0,0,null,0,null,new LMBranch("0",projectroot+"gallery_user.php"),null,null,projectroot+"/menusystemmodel022/menusystemitem2.gif",projectroot+"/menusystemmodel022/menusystemitem2_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem4",329,0,120,32,0,0,null,0,null,new LMBranch("0",projectroot+"video_user.php"),null,null,projectroot+"/menusystemmodel022/menusystemitem3.gif",projectroot+"/menusystemmodel022/menusystemitem3_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem5",449,0,120,32,0,0,null,0,null,new LMBranch("0",projectroot+"blog_user.php"),null,null,projectroot+"/menusystemmodel022/menusystemitem4.gif",projectroot+"/menusystemmodel022/menusystemitem4_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem6",569,0,120,32,0,0,null,0,null,new LMBranch("0",projectroot+"contact_user.php"),null,null,projectroot+"/menusystemmodel022/menusystemitem5.gif",projectroot+"/menusystemmodel022/menusystemitem5_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem7",689,0,120,32,0,0,null,0,null,null,null,null,projectroot+"/menusystemmodel022/menusystemitem6.gif",projectroot+"/menusystemmodel022/menusystemitem6_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem8",809,0,91,32,0,0,null,0,null,null,null,null,projectroot+"/menusystemmodel022/menusystemitem7.gif",projectroot+"/menusystemmodel022/menusystemitem7_over.gif",null);
	var MenuSystemModel022_MNU1 = new LMMenu(mnuname,x+0,y+0,900,32,1,0,null,0,null,MenuSystemItems,1);
	LMObjects[objindex++]= MenuSystemModel022_MNU1;

	RegisterMainMenu(MenuSystemModel022_MNU1);

	ReIndexMenu(MenuSystemModel022_MNU1, index);

}
