Replace the AJAX call (retrieveData()) with the JSON dump below.  Don't bother trying to setup Django (unless you really want to).

	[
	    {
	        "url": "http://localhost:8000/api/v1/board/1/", 
	        "id": 1, 
	        "name": "Family Chores", 
	        "position": 1, 
	        "cards": [
	            {
	                "id": 1, 
	                "name": "Colton", 
	                "position": 1, 
	                "activities": [
	                    {
	                        "id": 1, 
	                        "name": "Make Bed", 
	                        "position": 1, 
	                        "card": 1, 
	                        "comments": []
	                    }, 
	                    {
	                        "id": 4, 
	                        "name": "Make React Frontend", 
	                        "position": 2, 
	                        "card": 1, 
	                        "comments": []
	                    }, 
	                    {
	                        "id": 5, 
	                        "name": "Test Position", 
	                        "position": 0, 
	                        "card": 1, 
	                        "comments": []
	                    }
	                ]
	            }, 
	            {
	                "id": 2, 
	                "name": "Ashley", 
	                "position": 2, 
	                "activities": [
	                    {
	                        "id": 2, 
	                        "name": "Make Dinner", 
	                        "position": 1, 
	                        "card": 2, 
	                        "comments": []
	                    }
	                ]
	            }, 
	            {
	                "id": 3, 
	                "name": "Bloo", 
	                "position": 3, 
	                "activities": [
	                    {
	                        "id": 3, 
	                        "name": "Lick Butt", 
	                        "position": 1, 
	                        "card": 3, 
	                        "comments": [
	                            {
	                                "id": 1, 
	                                "body": "Shouldn't be too hard for you..."
	                            }
	                        ]
	                    }
	                ]
	            }
	        ]
	    }
	]