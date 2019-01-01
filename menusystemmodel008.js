function menusystemmodel008Show(x, y, mnuname) {
	z_index++;
	var MenuSystemItems = null;
	var miindex= 0;
	var index= z_index;

	MenuSystemItems = new Array();
	miindex=0;
	
	var MenuSystemModel008_MNU1 = new LMMenu("MenuSystemModel008_MNU1",x+250,y+0,152,119,0,0,null,0,null,MenuSystemItems,0);
	LMObjects[objindex++]= MenuSystemModel008_MNU1;

	MenuSystemItems = new Array();
	miindex=0;
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem1",0,0,250,30,0,0,null,0,null,new LMBranch("0",projectroot+"traditional-craftsmanship_user.php"),null,null,projectroot+"/menusystemmodel008/menusystemitem4.gif",projectroot+"/menusystemmodel008/menusystemitem4_over.gif",MenuSystemModel008_MNU1);
	var MenuSystemModel008_MNU2 = new LMMenu(mnuname,x+0,y+0,250,30,1,0,null,0,null,MenuSystemItems,1);
	LMObjects[objindex++]= MenuSystemModel008_MNU2;

	RegisterMainMenu(MenuSystemModel008_MNU2);

	ReIndexMenu(MenuSystemModel008_MNU2, index);

}
