//create variable to hold map
    	var map;
        //variable for coordinate limits
        // this contains the the information for how large of an area to build sections
        var north= 44.617070;
        var left= -79.439220;
        var south= 44.598616;
        var right= -79.411755;
        //create variables to hold box increments
        var incrementY= 0.005;
        var incrementX= 0.005;
        //create variable to hold section interation
        var sectionI = 0;
        // create empty array to hold sections
        var section = [];
        //create an array to store handle the click function for each section
        var sectionClick = new Array;

     	function initMap() {
	        map = new google.maps.Map(document.getElementById('map'), {
	          center: {lat: 44.600, lng: -79.416},
	          zoom: 13
	        });

            var XInter= 0;
            var YInter= 0;

            var la = left;
            //build each of the latitude lines
            for(la; la <= right; la=la+incrementX){
                XInter++;
                console.log('x: '+la);
                //build for each of the longditude lines
                for(var lo= north; lo >= south; lo=lo-incrementY){
                    YInter++;
                    console.log('y: '+lo);
                    // set cardinal bounds for each of the section corners
                    var bounds ={
                        'north': lo,
                        'south': lo-incrementY,
                        'east': la+incrementX,
                        'west': la
                    };
                    //add bounds to array this will be used in a loop to construct each individual box
                    section.push(bounds);

                }
            }
            //build tiles in the set bounds
            var thisSection= new Array;
            //loop through each section that bounds were built for and create the map overlay for them
            for(var counter= 0; counter <= section.length; counter++){
                thisSection[counter] = new google.maps.Rectangle({
                    strokeColor: '#333',
                    strokeOpacity: 0.8,
                    strokeWeight: 1,
                    fillColor: '#FF0000',
                    fillOpacity: 0.35,
                    map: map,
                    bounds: section[counter]
                });
                //function to isolate counter to be specific with cell clicked
                openSection(counter, thisSection[counter]);

            }
    	};
        //function to manage clicking a section
        function openSection (section, event){
            google.maps.event.addListener(event, 'click',function(){
                // getthe html sections to output the variables
                var output =document.getElementById('data').getElementsByTagName('em');

                //create loop to add all the data for each section
                console.log(output);
                //call function that gets the average of all the data
                var information = dataAverage(section+1);
                console.log(information);
                //output the section number to title
                document.getElementById('sectionNo').innerHTML= section+1; //plus one fixes off by one
                //output the averages to the dom
                for( var counter = 0; counter< output.length; counter++){
                    // output.innerHTML= information[counter];
                    output[counter].innerHTML= information[counter];
                    
                }
            });
        };


        function dataAverage(section){
            var sectionInfo= [];
            var sectionData= [];
            var sectionIteration = 0;
            <% for(var dbCounter =0;dbCounter<research.length; dbCounter++){ %>
                if(<%= research[dbCounter].section %> == section){
                    //assaign objects to variables
                    var dataVariable =[
                        <%= research[dbCounter].density %>,
                        <%= research[dbCounter].zoning %>,
                        <%= research[dbCounter].streetConnection %>,
                        <%= research[dbCounter].sidewalks %>,
                        <%= research[dbCounter].sidewalkWidth %>,
                        <%= research[dbCounter].sidewalkBuffer %>,
                        <%= research[dbCounter].sidewalkCondition %>,
                        <%= research[dbCounter].sidewalkObstructions %>,
                        <%= research[dbCounter].sidewalkSnowfall %>,
                        <%= research[dbCounter].crosswalks %>,
                        <%= research[dbCounter].crosswalkSymbols %>,
                        <%= research[dbCounter].cyclingLanes %>,
                        <%= research[dbCounter].cyclingLanesNearest %>,
                        <%= research[dbCounter].CyclingRoadSafe %>,
                        <%= research[dbCounter].cyclingLanesConnection %>,
                        <%= research[dbCounter].cyclingLanesSignage %>,
                        <%= research[dbCounter].cyclingLightsAccessability %>,
                        <%= research[dbCounter].cyclingBikeRacks %>,
                        <%= research[dbCounter].cyclingBusBikeRack %>,
                        <%= research[dbCounter].roadTrafficFlow %>,
                        <%= research[dbCounter].roadStreetWidth %>,
                        <%= research[dbCounter].roadOnStreetParking %>,
                        <%= research[dbCounter].roadTrafficCalming %>,
                        <%= research[dbCounter].roadVehicleRestrictions %>,
                        <%= research[dbCounter].trailPaths %>,
                        <%= research[dbCounter].trailsConnection %>,
                        <%= research[dbCounter].trailSafety %>,
                        <%= research[dbCounter].trailsConnection %>,
                        <%= research[dbCounter].trailSkateboard %>,
                        <%= research[dbCounter].transitStops %>,
                        <%= research[dbCounter].transitClosestStop %>,
                        <%= research[dbCounter].transitShelters %>,
                        <%= research[dbCounter].transitRouteInfo %>,
                        <%= research[dbCounter].safetyGeneralSafety %>,
                        <%= research[dbCounter].safetyVacantBuildings %>,
                        <%= research[dbCounter].safetyPersonsWatching %>,
                        <%= research[dbCounter].aestheticTrees %>,
                        <%= research[dbCounter].aestheticStreetLife %>,
                        <%= research[dbCounter].aestheticBuildingProximity %>,
                        <%= research[dbCounter].aestheticWeatherProtection %>,
                        <%= research[dbCounter].aestheticStreetFurniture %>,
                        <%= research[dbCounter].aestheticStreetscape %>,
                        <%= research[dbCounter].servicesAccess %>,
                        <%= research[dbCounter].servicesGroceryProximity %>,
                        <%= research[dbCounter].servicesParkProximity %>,
                        <%= research[dbCounter].servicesHealthcare %>,
                        <%= research[dbCounter].planningOCP %>,
                        <%= research[dbCounter].planningPedestrianPlan %>,
                        <%= research[dbCounter].planningMunicipalCommitees %>,
                        <%= research[dbCounter].planningEvents %>,

                    ];
                    //add data as an array to the sectionInfor. each result that equals section that was clicked will be added as an array inside the array
                    sectionInfo.push(dataVariable);
                }
            <% } %>
            //select each databse return with clicked section and add them together and divide by the ammount 
            for(var counter=0;counter<sectionInfo.length;counter++){
                //create a variable to hold the current iteration of data from database
                var thisSection = sectionInfo[counter];
                //loop through each data entry and add to an array where subsequent entries will be added each loop iterations
                for(var innerCounter=0;innerCounter<thisSection.length; innerCounter++){
                    if(!sectionData[innerCounter]){
                        sectionData[innerCounter]= thisSection[innerCounter];
                    }
                    else{
                        sectionData[innerCounter]= sectionData[innerCounter]+thisSection[innerCounter];
                    }
                }
                sectionIteration++;
            }
            console.log('iteration: '+sectionIteration);
            //divide each dataset by the number of iterations to find the averate which will be displayed
            for(var counter=0;counter<sectionData.length;counter++){
                sectionData[counter]= sectionData[counter]/sectionIteration;
            }
            //return the average
            return sectionData;

            
        }