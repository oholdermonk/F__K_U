var myDataRef = new Firebase('https://fcku.firebaseio.com/');

function runPost(){
	var test = new Date().getMonth();
	console.log(test);
	console.log("COOL");
	fullOn();
	function fullOn(){
          
        myDataRef.on("child_added", function(snapshot) {
	        var words1 = [];
	        var words2 = [];
	
        	snapshot.forEach(function(childSnapshot){
        		var childData = snapshot.val();
        		var date = new Date().getMonth();
        		if(childData.DATE!=date){
        			console.log("BOOM");
                    FB.api(
        				childData.ID,
        				"POST",
        				{
        					"message": "¯\\_(ツ)_/¯",
        					"place": "204305412928843"
        				},
        				function (response) {
        			      if (response && !response.error) {
        			        /* handle the result */
        			        var thing1= new Firebase(myDataRef+snapshot.key());
        	    			thing1.remove();
        			      } else {
        			      	console.log(response);
        			      }
        			    }
        		    );
                } else {
        			console.log("equal");
        		}
        		
        	    });
            });
	}
	
	
	
	
	
	
}


function quickPost(){
          
        myDataRef.on("child_added", function(snapshot) {
	        var words1 = [];
	        var words2 = [];
	
        	snapshot.forEach(function(childSnapshot){
        		var childData = snapshot.val();
        		var date = new Date().getMonth();
        		if(true){
        			console.log("BOOM");
                    FB.api(
        				childData.ID,
        				"POST",
        				{
        					"message": "¯\\_(ツ)_/¯",
        					"place": "204305412928843"
        				},
        				function (response) {
        			      if (response && !response.error) {
        			        /* handle the result */
        			        var thing1= new Firebase(myDataRef+snapshot.key());
        	    			thing1.remove();
        			      }
        			    }
        		    );
                } else {
        			console.log("equal");
        		}
        		
        	    });
            });
        }
