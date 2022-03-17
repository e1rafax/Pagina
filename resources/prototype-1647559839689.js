function initData() {
  jimData.variables["Nombre de usuario"] = "";
  jimData.variables["Email"] = "";
  jimData.variables["Nombre completo"] = "";
  jimData.isInitialized = true;
}(function(window, undefined) {
  var dictionary = {
    "d6e7ade1-abc5-4ab4-9462-3068f62a2e55": "Sing up",
    "e1df4c81-2a0d-42ee-b201-a16fc3460914": "Login",
    "5e146f3e-9bee-4f37-9565-ac868bddeec9": "Interfax usuario",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);(function(window, undefined) {
  var dictionary = {
  };

  window.jimDevelopers.lookUpSlice = function(name) {
    var imageName;
    if(dictionary.hasOwnProperty(name)) { /* search by name */
      imageName = dictionary[name];
    }
    return imageName;
  };
})(window);	window.widgets = {
		descriptionMap : widgetDescriptionMap = {},
		rootWidgetMap : widgetRootMap = {}
	};

	widgets.descriptionMap[["s-Image_24", "d6e7ade1-abc5-4ab4-9462-3068f62a2e55"]] = ""; 

			widgets.rootWidgetMap[["s-Image_24", "d6e7ade1-abc5-4ab4-9462-3068f62a2e55"]] = ["Picture", "s-Image_24"]; 

	widgets.descriptionMap[["s-Paragraph_1", "d6e7ade1-abc5-4ab4-9462-3068f62a2e55"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_1", "d6e7ade1-abc5-4ab4-9462-3068f62a2e55"]] = ["Button", "s-Paragraph_1"]; 

	widgets.descriptionMap[["s-Image_2", "d6e7ade1-abc5-4ab4-9462-3068f62a2e55"]] = ""; 

			widgets.rootWidgetMap[["s-Image_2", "d6e7ade1-abc5-4ab4-9462-3068f62a2e55"]] = ["Check mark", "s-Image_2"]; 

	widgets.descriptionMap[["s-Input_4", "d6e7ade1-abc5-4ab4-9462-3068f62a2e55"]] = ""; 

			widgets.rootWidgetMap[["s-Input_4", "d6e7ade1-abc5-4ab4-9462-3068f62a2e55"]] = ["Input field", "s-Input_4"]; 

	widgets.descriptionMap[["s-Input_3", "d6e7ade1-abc5-4ab4-9462-3068f62a2e55"]] = ""; 

			widgets.rootWidgetMap[["s-Input_3", "d6e7ade1-abc5-4ab4-9462-3068f62a2e55"]] = ["Input field", "s-Input_3"]; 

	widgets.descriptionMap[["s-Input_2", "d6e7ade1-abc5-4ab4-9462-3068f62a2e55"]] = ""; 

			widgets.rootWidgetMap[["s-Input_2", "d6e7ade1-abc5-4ab4-9462-3068f62a2e55"]] = ["Input field", "s-Input_2"]; 

	widgets.descriptionMap[["s-Input_1", "d6e7ade1-abc5-4ab4-9462-3068f62a2e55"]] = ""; 

			widgets.rootWidgetMap[["s-Input_1", "d6e7ade1-abc5-4ab4-9462-3068f62a2e55"]] = ["Input field", "s-Input_1"]; 

	widgets.descriptionMap[["s-Paragraph_12", "d6e7ade1-abc5-4ab4-9462-3068f62a2e55"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_12", "d6e7ade1-abc5-4ab4-9462-3068f62a2e55"]] = ["Label", "s-Paragraph_12"]; 

	widgets.descriptionMap[["s-Paragraph_13", "d6e7ade1-abc5-4ab4-9462-3068f62a2e55"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_13", "d6e7ade1-abc5-4ab4-9462-3068f62a2e55"]] = ["Title", "s-Paragraph_13"]; 

	widgets.descriptionMap[["s-Paragraph_14", "d6e7ade1-abc5-4ab4-9462-3068f62a2e55"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_14", "d6e7ade1-abc5-4ab4-9462-3068f62a2e55"]] = ["Button", "s-Paragraph_14"]; 

	widgets.descriptionMap[["s-Image_24", "e1df4c81-2a0d-42ee-b201-a16fc3460914"]] = ""; 

			widgets.rootWidgetMap[["s-Image_24", "e1df4c81-2a0d-42ee-b201-a16fc3460914"]] = ["Picture", "s-Image_24"]; 

	widgets.descriptionMap[["s-Paragraph_1", "e1df4c81-2a0d-42ee-b201-a16fc3460914"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_1", "e1df4c81-2a0d-42ee-b201-a16fc3460914"]] = ["Button", "s-Paragraph_1"]; 

	widgets.descriptionMap[["s-Paragraph_12", "e1df4c81-2a0d-42ee-b201-a16fc3460914"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_12", "e1df4c81-2a0d-42ee-b201-a16fc3460914"]] = ["Label", "s-Paragraph_12"]; 

	widgets.descriptionMap[["s-Paragraph_13", "e1df4c81-2a0d-42ee-b201-a16fc3460914"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_13", "e1df4c81-2a0d-42ee-b201-a16fc3460914"]] = ["Title", "s-Paragraph_13"]; 

	widgets.descriptionMap[["s-Input_4", "e1df4c81-2a0d-42ee-b201-a16fc3460914"]] = ""; 

			widgets.rootWidgetMap[["s-Input_4", "e1df4c81-2a0d-42ee-b201-a16fc3460914"]] = ["Input field", "s-Input_4"]; 

	widgets.descriptionMap[["s-Input_2", "e1df4c81-2a0d-42ee-b201-a16fc3460914"]] = ""; 

			widgets.rootWidgetMap[["s-Input_2", "e1df4c81-2a0d-42ee-b201-a16fc3460914"]] = ["Input field", "s-Input_2"]; 

	widgets.descriptionMap[["s-Image_1", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Image_1", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Image placeholder", "s-Image_1"]; 

	widgets.descriptionMap[["s-Image_5", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Image_5", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Image placeholder", "s-Image_5"]; 

	widgets.descriptionMap[["s-Image_3", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Image_3", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Image placeholder", "s-Image_3"]; 

	widgets.descriptionMap[["s-Image_6", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Image_6", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Image placeholder", "s-Image_6"]; 

	widgets.descriptionMap[["s-Image_8", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Image_8", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Image placeholder", "s-Image_8"]; 

	widgets.descriptionMap[["s-Text_1", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Text_1", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Text", "s-Text_1"]; 

	widgets.descriptionMap[["s-Text_2", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Text_2", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Text", "s-Text_2"]; 

	widgets.descriptionMap[["s-Text_3", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Text_3", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Text", "s-Text_3"]; 

	widgets.descriptionMap[["s-Text_5", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Text_5", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Text", "s-Text_5"]; 

	widgets.descriptionMap[["s-Text_6", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Text_6", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Text", "s-Text_6"]; 

	widgets.descriptionMap[["s-Text_7", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Text_7", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Text", "s-Text_7"]; 

	widgets.descriptionMap[["s-Text_8", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Text_8", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Text", "s-Text_8"]; 

	widgets.descriptionMap[["s-Text_9", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Text_9", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Text", "s-Text_9"]; 

	widgets.descriptionMap[["s-Text_10", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Text_10", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Text", "s-Text_10"]; 

	widgets.descriptionMap[["s-Panel_1", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Panel_1", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Text_20", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Text_20", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Text", "s-Text_20"]; 

	widgets.descriptionMap[["s-Text_21", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Text_21", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Text", "s-Text_21"]; 

	widgets.descriptionMap[["s-Text_22", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Text_22", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Text", "s-Text_22"]; 

	widgets.descriptionMap[["s-Text_23", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Text_23", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Text", "s-Text_23"]; 

	widgets.descriptionMap[["s-Paragraph_2", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_2", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Text", "s-Paragraph_2"]; 

	widgets.descriptionMap[["s-Paragraph_3", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_3", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Text", "s-Paragraph_3"]; 

	widgets.descriptionMap[["s-Paragraph_4", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_4", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Text", "s-Paragraph_4"]; 

	widgets.descriptionMap[["s-Panel_2", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Panel_2", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Text_11", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Text_11", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Text", "s-Text_11"]; 

	widgets.descriptionMap[["s-Text_12", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Text_12", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Text", "s-Text_12"]; 

	widgets.descriptionMap[["s-Text_13", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Text_13", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Text", "s-Text_13"]; 

	widgets.descriptionMap[["s-Image_4", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Image_4", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Image placeholder", "s-Image_4"]; 

	widgets.descriptionMap[["s-Image_7", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Image_7", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Image placeholder", "s-Image_7"]; 

	widgets.descriptionMap[["s-Image_9", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Image_9", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Image placeholder", "s-Image_9"]; 

	widgets.descriptionMap[["s-Image_11", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Image_11", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Image placeholder", "s-Image_11"]; 

	widgets.descriptionMap[["s-Image_12", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Image_12", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Image placeholder", "s-Image_12"]; 

	widgets.descriptionMap[["s-Image_13", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Image_13", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Image placeholder", "s-Image_13"]; 

	widgets.descriptionMap[["s-Panel_3", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Panel_3", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Dynamic Panel", "s-Dynamic_Panel"]; 

	widgets.descriptionMap[["s-Rectangle_2", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Rectangle_2", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Light button 1", "s-Rectangle_2"]; 

	widgets.descriptionMap[["s-Rectangle_3", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Rectangle_3", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Light button 1", "s-Rectangle_3"]; 

	widgets.descriptionMap[["s-Rectangle_4", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Rectangle_4", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Light button 1", "s-Rectangle_4"]; 

	widgets.descriptionMap[["s-Rectangle_5", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Rectangle_5", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Light button 1", "s-Rectangle_5"]; 

	widgets.descriptionMap[["s-Text_4", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Text_4", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Text", "s-Text_4"]; 

	widgets.descriptionMap[["s-Image", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Image", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Image", "s-Image"]; 

	widgets.descriptionMap[["s-Image_35", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Image_35", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["User icon", "s-Image_35"]; 

	widgets.descriptionMap[["s-Paragraph", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Text", "s-Paragraph"]; 

	widgets.descriptionMap[["s-Paragraph_1", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_1", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Text", "s-Paragraph_1"]; 

	widgets.descriptionMap[["s-Paragraph_14", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_14", "5e146f3e-9bee-4f37-9565-ac868bddeec9"]] = ["Button", "s-Paragraph_14"]; 

	widgets.descriptionMap[["s-Image", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Image", "s-Image"]; 

	widgets.descriptionMap[["s-Rectangle_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Rectangle_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Button dark", "s-Rectangle_1"]; 

	widgets.descriptionMap[["s-Image_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["User icon", "s-Image_1"]; 

	widgets.descriptionMap[["s-Bg", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Bg", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Content 1", "s-Content_1"]; 

	widgets.descriptionMap[["s-Title_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Title_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Title 1", "s-Title_1"]; 

	widgets.descriptionMap[["s-Paragraph_6", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_6", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Paragraph 1", "s-Paragraph_6"]; 

	widgets.descriptionMap[["s-Bg_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Bg_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Content 1", "s-Content_1"]; 

	widgets.descriptionMap[["s-Title_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Title_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Title 1", "s-Title_2"]; 

	widgets.descriptionMap[["s-Paragraph_7", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_7", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Paragraph 1", "s-Paragraph_7"]; 

	widgets.descriptionMap[["s-Title_3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Title_3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Title 1", "s-Title_3"]; 

	widgets.descriptionMap[["s-Paragraph_9", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_9", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Paragraph 1", "s-Paragraph_9"]; 

	widgets.descriptionMap[["s-Text_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Text", "s-Text_1"]; 

	widgets.descriptionMap[["s-Image_24", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_24", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Picture", "s-Image_24"]; 

	widgets.descriptionMap[["s-Image_32", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_32", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Twitter icon", "s-Image_32"]; 

	widgets.descriptionMap[["s-Text_3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Twitter", "s-Twitter"]; 

	widgets.descriptionMap[["s-Image_11", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_11", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Facebook icon", "s-Image_11"]; 

	widgets.descriptionMap[["s-Text_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Facebook", "s-Facebook"]; 

	widgets.descriptionMap[["s-Text_4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Google", "s-Google"]; 

	widgets.descriptionMap[["s-Image_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Google", "s-Google"]; 

	widgets.descriptionMap[["s-Text_6", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_6", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Text", "s-Text_6"]; 

	widgets.descriptionMap[["s-Line_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Line_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Line", "s-Line_2"]; 

	widgets.descriptionMap[["s-Text_7", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_7", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Text", "s-Text_7"]; 

	widgets.descriptionMap[["s-Text_8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Text", "s-Text_8"]; 

	widgets.descriptionMap[["s-Text_9", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_9", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Text", "s-Text_9"]; 

	widgets.descriptionMap[["s-Title", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Title", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Large feature 2", "s-Feature-big-2"]; 

	widgets.descriptionMap[["s-Paragraph_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Large feature 2", "s-Feature-big-2"]; 

	widgets.descriptionMap[["s-Paragraph_12", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_12", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Large feature 2", "s-Feature-big-2"]; 

	widgets.descriptionMap[["s-Image_4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Image placeholder", "s-Image_4"]; 

	widgets.descriptionMap[["s-Paragraph_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Large feature 2", "s-Feature-big-2"]; 

	widgets.descriptionMap[["s-Paragraph_13", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_13", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Large feature 2", "s-Feature-big-2"]; 

	widgets.descriptionMap[["s-Image_5", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_5", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Image placeholder", "s-Image_5"]; 

	widgets.descriptionMap[["s-Paragraph_3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Large feature 2", "s-Feature-big-2"]; 

	widgets.descriptionMap[["s-Paragraph_14", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_14", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Large feature 2", "s-Feature-big-2"]; 

	widgets.descriptionMap[["s-Image_3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Image placeholder", "s-Image_3"]; 

	widgets.descriptionMap[["s-Paragraph_5", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_5", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Large feature 2", "s-Feature-big-2"]; 

	widgets.descriptionMap[["s-Paragraph_15", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_15", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Large feature 2", "s-Feature-big-2"]; 

	widgets.descriptionMap[["s-Image_6", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_6", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Image placeholder", "s-Image_6"]; 

	widgets.descriptionMap[["s-Paragraph_8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Large feature 2", "s-Feature-big-2"]; 

	widgets.descriptionMap[["s-Paragraph_16", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_16", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Large feature 2", "s-Feature-big-2"]; 

	widgets.descriptionMap[["s-Image_8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_8", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Image placeholder", "s-Image_8"]; 

	widgets.descriptionMap[["s-Text_10", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_10", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Text", "s-Text_10"]; 

	widgets.descriptionMap[["s-Rectangle_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Rectangle_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Button dark", "s-Rectangle_2"]; 

	widgets.descriptionMap[["s-Image_7", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_7", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["User icon", "s-Image_7"]; 

	widgets.descriptionMap[["s-Line_4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Line_4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Line", "s-Line_4"]; 

	widgets.descriptionMap[["s-Line_3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Line_3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Line", "s-Line_3"]; 

	jQuery("#simulation")
  .on("click", ".s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimNot",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_10",
                        "property": "jimIsVisible"
                      } ]
                    },{
                      "action": "jimNot",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Paragraph_15",
                        "property": "jimIsVisible"
                      } ]
                    } ]
                  },{
                    "action": "jimNot",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Paragraph_4",
                      "property": "jimIsVisible"
                    } ]
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Paragraph_6",
                    "property": "jimIsVisible"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5e146f3e-9bee-4f37-9565-ac868bddeec9"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_4")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": [ "#s-Image_2" ]
                    },
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  })
  .on("keyup.jim", ".s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 .keyup", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimRegExp",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_4",
                  "property": "jimGetValue"
                },"^.{3,99}$" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#s-Input_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      if(!jimUtil.isAndroidDevice() || data.which != 229)
      	jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimRegExp",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_3",
                  "property": "jimGetValue"
                },"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#s-Input_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      if(!jimUtil.isAndroidDevice() || data.which != 229)
      	jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimRegExp",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_2",
                  "property": "jimGetValue"
                },"^.{3,99}$" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#s-Input_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      if(!jimUtil.isAndroidDevice() || data.which != 229)
      	jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_1",
                    "property": "jimGetValue"
                  },"^[a-zA-Z]+$" ]
                },{
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_1",
                    "property": "jimGetValue"
                  },"^.{3,99}$" ]
                } ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#s-Input_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      if(!jimUtil.isAndroidDevice() || data.which != 229)
      	jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    }
  })
  .on("pageload", ".s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#s-Input_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#s-Input_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#s-Input_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageunload", ".s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 .pageunload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Email" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_3",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Nombre de usuario" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_2",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Nombre completo" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_4",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Input_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#069BDE",
                      "border-right-color": "#069BDE",
                      "border-bottom-color": "#069BDE",
                      "border-left-color": "#069BDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Paragraph_7 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_7" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-20.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 270
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_6" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Input_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#069BDE",
                      "border-right-color": "#069BDE",
                      "border-bottom-color": "#069BDE",
                      "border-left-color": "#069BDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Paragraph_7 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_6" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_3",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Input_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#069BDE",
                      "border-right-color": "#069BDE",
                      "border-bottom-color": "#069BDE",
                      "border-left-color": "#069BDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Paragraph_5 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_5" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-20.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 270
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_4" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Input_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#069BDE",
                      "border-right-color": "#069BDE",
                      "border-bottom-color": "#069BDE",
                      "border-left-color": "#069BDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Paragraph_5 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_4" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_2",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Input_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#069BDE",
                      "border-right-color": "#069BDE",
                      "border-bottom-color": "#069BDE",
                      "border-left-color": "#069BDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Paragraph_16 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_16" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-20.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 270
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_15" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Input_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#069BDE",
                      "border-right-color": "#069BDE",
                      "border-bottom-color": "#069BDE",
                      "border-left-color": "#069BDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Paragraph_16 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_15" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_1",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#069BDE",
                      "border-right-color": "#069BDE",
                      "border-bottom-color": "#069BDE",
                      "border-left-color": "#069BDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Paragraph_11 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_11" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-20.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 270
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_10" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#069BDE",
                      "border-right-color": "#069BDE",
                      "border-bottom-color": "#069BDE",
                      "border-left-color": "#069BDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Paragraph_11 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_10" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_4",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Input_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DC3545",
                      "border-right-color": "#DC3545",
                      "border-bottom-color": "#DC3545",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Paragraph_7 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_6" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_7" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "471.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 270
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_4",
                    "property": "jimGetValue"
                  },"^.{3,99}$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Input_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DC3545",
                      "border-right-color": "#DC3545",
                      "border-bottom-color": "#DC3545",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Paragraph_7 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_6" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Input_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CED4DA",
                      "border-right-color": "#CED4DA",
                      "border-bottom-color": "#CED4DA",
                      "border-left-color": "#CED4DA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Paragraph_7 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_6" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_3",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Input_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DC3545",
                      "border-right-color": "#DC3545",
                      "border-bottom-color": "#DC3545",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Paragraph_5 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_4" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_5" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "393.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 270
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_3",
                    "property": "jimGetValue"
                  },"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Input_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DC3545",
                      "border-right-color": "#DC3545",
                      "border-bottom-color": "#DC3545",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Paragraph_11 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_4" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Input_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CED4DA",
                      "border-right-color": "#CED4DA",
                      "border-bottom-color": "#CED4DA",
                      "border-left-color": "#CED4DA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Paragraph_5 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_4" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_2",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Input_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DC3545",
                      "border-right-color": "#DC3545",
                      "border-bottom-color": "#DC3545",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Paragraph_16 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_15" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_16" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "326.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 270
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_2",
                    "property": "jimGetValue"
                  },"^.{3,99}$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Input_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DC3545",
                      "border-right-color": "#DC3545",
                      "border-bottom-color": "#DC3545",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Paragraph_16 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_15" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Input_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CED4DA",
                      "border-right-color": "#CED4DA",
                      "border-bottom-color": "#CED4DA",
                      "border-left-color": "#CED4DA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Paragraph_16 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_15" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_1",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DC3545",
                      "border-right-color": "#DC3545",
                      "border-bottom-color": "#DC3545",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Paragraph_11 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_10" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_11" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "257.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 270
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_1",
                    "property": "jimGetValue"
                  },"^[a-zA-Z][a-zA-Z\\s]*$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DC3545",
                      "border-right-color": "#DC3545",
                      "border-bottom-color": "#DC3545",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Paragraph_11 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_10" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CED4DA",
                      "border-right-color": "#CED4DA",
                      "border-bottom-color": "#CED4DA",
                      "border-left-color": "#CED4DA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d6e7ade1-abc5-4ab4-9462-3068f62a2e55 #s-Paragraph_11 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_10" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-e1df4c81-2a0d-42ee-b201-a16fc3460914 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimNot",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Paragraph_15",
                    "property": "jimIsVisible"
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Paragraph_6",
                    "property": "jimIsVisible"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5e146f3e-9bee-4f37-9565-ac868bddeec9"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("keyup.jim", ".s-e1df4c81-2a0d-42ee-b201-a16fc3460914 .keyup", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimRegExp",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_4",
                  "property": "jimGetValue"
                },"^.{3,99}$" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#s-Input_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      if(!jimUtil.isAndroidDevice() || data.which != 229)
      	jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimRegExp",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_2",
                  "property": "jimGetValue"
                },"^.{3,99}$" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#s-Input_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      if(!jimUtil.isAndroidDevice() || data.which != 229)
      	jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    }
  })
  .on("pageload", ".s-e1df4c81-2a0d-42ee-b201-a16fc3460914 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#s-Input_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageunload", ".s-e1df4c81-2a0d-42ee-b201-a16fc3460914 .pageunload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Nombre de usuario" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_2",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-e1df4c81-2a0d-42ee-b201-a16fc3460914 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_4",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e1df4c81-2a0d-42ee-b201-a16fc3460914 #s-Input_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#069BDE",
                      "border-right-color": "#069BDE",
                      "border-bottom-color": "#069BDE",
                      "border-left-color": "#069BDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e1df4c81-2a0d-42ee-b201-a16fc3460914 #s-Paragraph_7 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_7" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-20.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 270
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_6" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e1df4c81-2a0d-42ee-b201-a16fc3460914 #s-Input_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#069BDE",
                      "border-right-color": "#069BDE",
                      "border-bottom-color": "#069BDE",
                      "border-left-color": "#069BDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e1df4c81-2a0d-42ee-b201-a16fc3460914 #s-Paragraph_7 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_6" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_2",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e1df4c81-2a0d-42ee-b201-a16fc3460914 #s-Input_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#069BDE",
                      "border-right-color": "#069BDE",
                      "border-bottom-color": "#069BDE",
                      "border-left-color": "#069BDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e1df4c81-2a0d-42ee-b201-a16fc3460914 #s-Paragraph_16 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_16" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-20.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 270
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_15" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e1df4c81-2a0d-42ee-b201-a16fc3460914 #s-Input_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#069BDE",
                      "border-right-color": "#069BDE",
                      "border-bottom-color": "#069BDE",
                      "border-left-color": "#069BDE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e1df4c81-2a0d-42ee-b201-a16fc3460914 #s-Paragraph_16 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_15" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-e1df4c81-2a0d-42ee-b201-a16fc3460914 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_4",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e1df4c81-2a0d-42ee-b201-a16fc3460914 #s-Input_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DC3545",
                      "border-right-color": "#DC3545",
                      "border-bottom-color": "#DC3545",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e1df4c81-2a0d-42ee-b201-a16fc3460914 #s-Paragraph_7 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_6" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_7" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "354.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 270
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_4",
                    "property": "jimGetValue"
                  },"^.{3,99}$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e1df4c81-2a0d-42ee-b201-a16fc3460914 #s-Input_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DC3545",
                      "border-right-color": "#DC3545",
                      "border-bottom-color": "#DC3545",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e1df4c81-2a0d-42ee-b201-a16fc3460914 #s-Paragraph_7 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_6" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e1df4c81-2a0d-42ee-b201-a16fc3460914 #s-Input_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CED4DA",
                      "border-right-color": "#CED4DA",
                      "border-bottom-color": "#CED4DA",
                      "border-left-color": "#CED4DA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e1df4c81-2a0d-42ee-b201-a16fc3460914 #s-Paragraph_7 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_6" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_2",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e1df4c81-2a0d-42ee-b201-a16fc3460914 #s-Input_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DC3545",
                      "border-right-color": "#DC3545",
                      "border-bottom-color": "#DC3545",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e1df4c81-2a0d-42ee-b201-a16fc3460914 #s-Paragraph_16 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_15" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_16" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "276.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 270
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_2",
                    "property": "jimGetValue"
                  },"^.{3,99}$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e1df4c81-2a0d-42ee-b201-a16fc3460914 #s-Input_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DC3545",
                      "border-right-color": "#DC3545",
                      "border-bottom-color": "#DC3545",
                      "border-left-color": "#DC3545"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e1df4c81-2a0d-42ee-b201-a16fc3460914 #s-Paragraph_16 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_15" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e1df4c81-2a0d-42ee-b201-a16fc3460914 #s-Input_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CED4DA",
                      "border-right-color": "#CED4DA",
                      "border-bottom-color": "#CED4DA",
                      "border-left-color": "#CED4DA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e1df4c81-2a0d-42ee-b201-a16fc3460914 #s-Paragraph_16 span" ],
                    "attributes": {
                      "color": "#4F4F4F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_15" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-5e146f3e-9bee-4f37-9565-ac868bddeec9 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ],
                    "transition": {
                      "type": "pop",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_3" ],
                    "transition": {
                      "type": "pop",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ],
                    "transition": {
                      "type": "pop",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-5e146f3e-9bee-4f37-9565-ac868bddeec9 #s-Paragraph_14 span" ],
                    "attributes": {
                      "color": "#F3F3F3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-5e146f3e-9bee-4f37-9565-ac868bddeec9 #s-Paragraph_14 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#069BDE"
                    }
                  },{
                    "target": [ "#s-5e146f3e-9bee-4f37-9565-ac868bddeec9 #s-Paragraph_14 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-attachment": "scroll",
                      "background-image": "none"
                    }
                  },{
                    "target": [ "#s-5e146f3e-9bee-4f37-9565-ac868bddeec9 #s-Paragraph_14 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_3" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-5e146f3e-9bee-4f37-9565-ac868bddeec9 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_2" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Nombre de usuario"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_3" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Nombre completo"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_4" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Email"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_1" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Nombre de usuario"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-5e146f3e-9bee-4f37-9565-ac868bddeec9 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Paragraph_14") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-5e146f3e-9bee-4f37-9565-ac868bddeec9 #s-Paragraph_14" ],
                    "attributes": {
                      "opacity": "0.75"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-5e146f3e-9bee-4f37-9565-ac868bddeec9 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Paragraph_14")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d6e7ade1-abc5-4ab4-9462-3068f62a2e55"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d6e7ade1-abc5-4ab4-9462-3068f62a2e55"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e1df4c81-2a0d-42ee-b201-a16fc3460914"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e1df4c81-2a0d-42ee-b201-a16fc3460914",
                    "tab": true
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });