import{bN as t}from"./index-c7f6a24e.js";const o=async()=>(await t.get("/db/basic_info")).data,c=async()=>(await t.get("/db/expired_dirs")).data,r=async()=>{await t.post("/db/update_image_data",{},{timeout:1/0})},d=async a=>(await t.post("/db/match_images_by_tags",a)).data,g=async a=>(await t.post("/db/add_custom_tag",a)).data,p=async a=>(await t.post("/db/toggle_custom_tag_to_img",a)).data,i=async a=>{await t.post("/db/remove_custom_tag",a)},m=async a=>(await t.get("/db/img_selected_custom_tag",{params:{path:a}})).data,u=async a=>(await t.get("/db/search_by_substr",{params:{substr:a}})).data,e="/db/scanned_paths",_=async a=>{await t.post(e,{path:a})},b=async a=>{await t.delete(e,{data:{path:a}})};export{o as a,c as b,g as c,u as d,b as e,_ as f,d as g,m as h,i as r,p as t,r as u};
