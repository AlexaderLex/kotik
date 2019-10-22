// Settings
WEBSITE     = 'https://www.wiseowl.co.uk';
STARTPAGE   = '/vba-macros/videos/';

// Application init
WSHELL  = WSH.CreateObject('WScript.Shell');
EXCEL   = WSH.CreateObject("EXCEL.Application");
EXCEL.visible = true;
EXCEL.WorkBooks.Add;
EXCEL.Cells(1, 1).Value         = "Video Title";
EXCEL.Cells(1, 2).Value         = "Video URL";
EXCEL.Range("A1:B1").Select;
EXCEL.Selection.Font.Bold           = true;
EXCEL.Selection.Interior.ColorIndex = 1;
EXCEL.Selection.Interior.Pattern    = 1;
EXCEL.Selection.Font.ColorIndex     = 2;

var intIndex = 3;
function Show(videoTitle, videoURL) {
    EXCEL.Cells(intIndex, 1).Value = videoTitle;
    if (videoURL)
        EXCEL.Cells(intIndex, 2).Value = videoURL;
    else {
        var thisrange = EXCEL.Range( EXCEL.Cells(intIndex, 1), EXCEL.Cells(intIndex, 2) );
        thisrange.Merge();
        thisrange.Font.Bold           = true;
        thisrange.Interior.ColorIndex = 6;
    }

    intIndex++;
    EXCEL.Columns(1).AutoFit;
    EXCEL.Columns(2).AutoFit;
    EXCEL.Cells(intIndex, 1).Select;
}

// level 1 "bpTable"
startPage = getHTMLpage( STARTPAGE );
bpTable = startPage.querySelector(".bpTable");
a_tags = bpTable.querySelectorAll('tr td:first-child a');

for (var i = 0; i < a_tags.length; i++){ // level 1 video list walker
    Show( a_tags[i].innerText, '');
    videoListDOM = getHTMLpage( a_tags[i].getAttribute('href') );
    videoTitleSections = videoListDOM.querySelectorAll('.woVideoListDefaultSeriesTitle');

    for (var j = 0; j < videoTitleSections.length; j++) {
        a_tag = videoTitleSections[j].querySelector('a');
        particularVideoTitle = a_tag.innerText;
        YTURL = getHTMLpage( a_tag.getAttribute('href') ).querySelector('.woVideoWrapper iframe').getAttribute('src');
        Show(particularVideoTitle, YTURL);
    }
}

msg('done!');

function getHTMLpage( url ) {
    var url = (/^\//.test(url)) ? WEBSITE + url : WEBSITE + '/' + url;
    var httpreq = WSH.CreateObject('MSXML2.XMLHTTP.6.0');
    var HTML    = WSH.CreateObject('htmlfile');
    httpreq.open( 'GET', url );
    httpreq.send();
    if ( 200 !== httpreq.status ){
        msg( 'oh no! request error!!! error code: ' + httpreq.status);
        WScript.Quit(httpreq.status);
    }
    HTML.write(httpreq.responseText);
    return HTML;
}

function msg(t){WSHELL.Popup( t , 0, 'Debug', 64 )}

