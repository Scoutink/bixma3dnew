<?php
/* these /connect files are designed to extend data to other servers - like having your 3D Building in their 3D Community Scene */
/* permissions are required for access to some data */
/* this connect file provides thing mold information list to recover a deleted item */
require_once('../core/functions/class_wtwconnect.php');
global $wtwconnect;
try {
	/* google analytics tracking (if defined in wtw_config.php) */
	$wtwconnect->trackPageView($wtwconnect->domainurl."/connect/websitems.php");
	
	/* get values from querystring or session */
	$zwebid = $wtwconnect->getVal('webid','');
	$zwebtype = $wtwconnect->getVal('webtype','');

	$zwebtypes = 'things';
	switch ($zwebtype) {
		case 'building':
			$zwebtypes = 'buildings';
			break;
		case 'community':
			$zwebtypes = 'communities';
			break;
	}

	/* get thing molds that have been deleted */
	$zresults = $wtwconnect->query("
		select 
			'Molds' as category,
			'1' as sorder,
			tm1.".$zwebtype."moldid as itemid,
			tm1.".$zwebtype."id as webid,
			tm1.shape as itemtype,
			case when tm1.shape = 'babylonfile' then 
					(select uo1.objectfile from ".wtw_tableprefix."uploadobjects uo1 where uo1.uploadobjectid=tm1.uploadobjectid)
				else tm1.shape
				end as webname
		from ".wtw_tableprefix.$zwebtype."molds tm1
		where tm1.".$zwebtype."id='".$zwebid."'
			and tm1.deleted=0

		union

		select 
			'Action Zones' as category,
			'3' as sorder,
			actionzoneid as itemid,
			a1.".$zwebtype."id as webid,
			actionzonetype as itemtype,
			actionzonename as webname
		from ".wtw_tableprefix."actionzones a1
		where a1.".$zwebtype."id='".$zwebid."'
			and a1.deleted=0

		union

		select 
			'3D Webs' as category,
			'2' as sorder,
			c1.connectinggridid as itemid,
			c1.childwebid as webid,
			c1.childwebtype as itemtype,
			case when c1.childwebtype = 'building' then 
					b1.buildingname
				else t1.thingname
				end as webname
		from ".wtw_tableprefix."connectinggrids c1
			left join ".wtw_tableprefix."things t1
				on c1.childwebid=t1.thingid
				and c1.childwebtype='thing'
			left join ".wtw_tableprefix."buildings b1
				on c1.childwebid=b1.buildingid
				and c1.childwebtype='building'
		where c1.parentwebid='".$zwebid."'
			and c1.deleted=0

		order by sorder, itemtype, webname;");
	
	echo $wtwconnect->addConnectHeader($wtwconnect->domainname);

	$i = 0;
	$zresponse = array();
	/* format json return dataset */
	foreach ($zresults as $zrow) {
		$zresponse[$i] = array(
			'category'=> $zrow["category"], 
			'itemid'=> $zrow["itemid"],
			'webid'=> $zrow["webid"],
			'itemtype'=> $zrow["itemtype"],
			'webname'=> $zrow["webname"]);
		$i += 1;
	}
	echo json_encode($zresponse);
} catch (Exception $e) {
	$wtwconnect->serror("connect-websitems.php=".$e->getMessage());
}
?>
