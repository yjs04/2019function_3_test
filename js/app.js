/*app.js*/
// append()-형식:요소.append("추가할 내용"); 
//개요-선택한 요소 뒤에 새로운 내용(content)를 추가
window.onload=function(){
	// slide button 
	let slidediv = $("#slider > div > div");
	
	slidediv.eq(0).append("<button class='btn btn-left'>&lt;</button>");
	slidediv.eq(2).append("<button class='btn btn-right'>&gt;</button>");
	$(".btn").css({
		width:"100%",
		height:"100%",
	});
	// slide
	slidediv.eq(1).attr("id","slide");
	for(let i=1;i<=3;i++){
		slidediv.eq(1).append("<img src=\"./images/slide"+i+".jpg\">");
	}
	
	let nowPage= 0;
	let slideimg= $("#slide > img");

	$("#slide").css({
		position:"relative",
		overflow:"hidden"
	});
	$("#slide>img").css({
		position:"absolute",
		left:"100%",
		top:0
	});
	$("#slide>img").eq(nowPage).css({
		position:"absolute",
		left:0,
		top:0
	});
	// slide button move
	// button left
	$(".btn-left").on("click",function(){
		if (slideimg.is(":animated"))return;
		$("#slide > img").eq(nowPage).animate({
			left:"100%"
		},1000);

		nowPage=nowPage-1 < 0 ? 2:nowPage-1;

		slideimg.eq(nowPage).css({
			left:"-100%"
		});

		slideimg.eq(nowPage).animate({
			left:0
		},1000);
	});
	// button right
	$(".btn-right").on("click",function(){
		if (slideimg.is(":animated"))return;
		$("#slide > img").eq(nowPage).animate({
			left : "-100%"
		},1000);

		nowPage=nowPage+1 >2 ? 0:nowPage+1;

		slideimg.eq(nowPage).css({
			left:"100%"
		});
		slideimg.eq(nowPage).animate({
			left:0
		},1000);
	});
	// page scroll
	for(let i=0;i<4;i++){
		$("nav > ul >li > a").eq(i+1).on("click",function(event){
			event.preventDefault();

			let href= $(this).attr("href");
			let top= $(href).offset().top;
			// offset:top,bottom,right,left값 구해오기
			$("html, body").animate({
				"scrollTop" :top
			},1000);
		});
	};
	// read more
	$("#webdesign>div").append("<button id='read'>read more</button>");
	$("#worldskills>div").append("<button id='read'>read More</button>");
	// let num=1;

	$("#webdesign button").on("click",function(){
		$("#webdesign .hidden-text").slideDown(1000).css({width:"500px"});
		$("#webdesign").animate({
			height:"1080px"
		},1000);
		// 원상복귀
		// if (num==1) {
		// 	$("#webdesign .hidden-text").slideDown(1000).css({width:"500px"});
		// 	$("#webdesign").animate({
		// 		height:"1080px"
		// 	},1000);
		// }
		// if (num!=1) {
		// 	$("#webdesign .hidden-text").slideUp(1000);
		// 	$("#webdesign").animate({
		// 		height:"500px"
		// 	},1000);
		// }
		// num*=-1;
	});

	$("#worldskills button").on("click",function(){
		$("#worldskills .hidden-text").slideDown(1000);
		$("#worldskills").animate({
			height:"750px"
		},1000);
		// 원상복귀
		// if (num==1) {
		// 	$("#worldskills .hidden-text").slideDown(1000);
		// 	$("#worldskills").animate({
		// 		height:"750px"
		// 	},1000);
		// }
		// if (num!=1) {
		// 	$("#worldskills .hidden-text").slideUp(1000);
		// 	$("#worldskills").animate({
		// 		height:"520px"
		// 	},1000);
		// }
		// num*=-1;
	});
	//photo section
	// 마우스가 위에 올라갔을때
	$("#photos img").hover(
		function(event){
			$(this).css({
				opacity:0.5
			});
		},
		//원래 상태로 복귀 
		function(event){
			$(this).css({
				opacity:1
			});
		}
	);
	// click event(photo section+result section)
	let html =`<div id='dark_wrap'>
					<div id="popup">
						<img src ="" alt="popup-image"/>
						<span>&times;</span>
						<p></p>
					</div>
				</div>`;

	$("body").append(html);
	// html-태그도 적용가능
	$("#dark_wrap").css({
		//-를 쓸수 없기 때문에 대문자로 대체
		backgroundColor:"rgba(0,0,0,0.5)",
		position:"fixed",
		left:0,
		top:0,
		width:"100%",
		height:"100%",

		display:"flex",
		justifyContent:"center",
		alignItems:"center",
	});

	$("#popup").css({
		width:"640px",
		height:"426px",
		backgroundColor:"#ffffff",
		zIndex:20,
		position:"relative"
	});

	$("#popup>img").css({
		position:"absolute"
	});

	$("#popup>span").css({
		position:"absolute",
		top:"20px",
		right:"20px",
		fontSize:"25px",
		cursor:"pointer"
	});

	$("#dark_wrap p").css({
		position:"absolute",
		left:"50%"
	});

	$("#dark_wrap").hide();

	$("#photos img").on("click",function(){
		let index=$(this).index()+1;

		$("#dark_wrap").fadeIn("slow");

		$("#dark_wrap img").css({
			width:"100%"
		});

		$("#dark_wrap img").attr("src", "./images/big_photo"+index+".jpg");

	});

	$("#popup span").on("click",function(){
		$("#dark_wrap").fadeOut("slow");
	});

	// result section
	$("#result > div > div").eq(0).attr("id","2013");
	//#result > div > div에 있는 첫번째 요소에 id를 2013으로 줌
	$("#result > div > div").eq(1).attr("id","2015");
	//#result > div > div에 있는 두번째 요소에 id를 2015으로 줌
	// 2013 result
	$("#2013 ul li ul li").on("click",function(){
		let index = $(this).index()+1;
		let name = $(this).text();
		let country = $(this).attr("data-country");
		let medal = $(this).attr("title");
		let image = $(this).attr("data-photo");

		$("#dark_wrap p").html("2013 - LEIPZIG<br>"+name+"<br>"+country+"<br>"+medal);
		// 각 요소 사이사이에 + 기호 넣기
		$("#dark_wrap img").css({
			width:"50%"
		});

		$("#dark_wrap img").attr("src","./images/"+image);

		$("#dark_wrap").fadeIn("slow");
	});
	// 2015 result
	$("#2015 ul li ul li").on("click",function(){
		let index = $(this).index()+1;
		let name = $(this).text();
		let country = $(this).attr("data-country");
		let medal = $(this).attr("title");
		let image = $(this).attr("data-photo");

		$("#dark_wrap p").html("2015 - SÃO PAULO<br>"+name+"<br>"+country+"<br>"+medal);
		// 각 요소 사이사이에 + 기호 넣기
		$("#dark_wrap img").css({
			width:"50%"
		});

		$("#dark_wrap img").attr("src","./images/"+image);

		$("#dark_wrap").fadeIn("slow");
	});

	// Parallax
	$(window).on("scroll",function(event){
		let scrollTop = event.target.scrollingElement.scrollTop;
		// webdesign
		let webdesignTop = $("#webdesign").offset().top;
		let webdesignbottom = webdesignTop+$("#webdesign").height();
		// worldskills
		let worldskillsTop = $("#worldskills").offset().top;
		let worldskillsbottom = worldskillsTop+$("#worldskills").height();
		// webdesign scroll event
		if (scrollTop+10 > webdesignTop && scrollTop-10 < webdesignTop) {
			$("#webdesign img").css({
				transform:"rotate(370deg)",
				transition:"1s"
			});
		}
		if (scrollTop > webdesignbottom || webdesignTop > scrollTop+event.target.scrollingElement.clientHeight){
			$("#webdesign img").css({
				transform:"rotate(10deg)",
				transition:"0s"
			});
		}
		// worldskills scroll event
		if (scrollTop+10 > worldskillsTop && scrollTop-10 < worldskillsTop) {
			$("#worldskills img").css({
				transform:"rotate(355deg)",
				transition:"1s"
			});
		}
		if (scrollTop > worldskillsbottom || worldskillsTop > scrollTop+event.target.scrollingElement.clientHeight){
			$("#worldskills img").css({
				transform:"rotate(-5deg)",
				transition:"0s"
			});
		}
	});
	// end
}