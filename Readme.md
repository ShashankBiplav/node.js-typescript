# About this API

Hi!
Just run `'npm install'` to install all the modules and dependencies that I have used in this app.
If you are cloning this API and make changes to any `.ts` file just run `tsc` in your terminal or powershell to compile or recompile typescript to javascript.


# Files

All the typescript files are located in **src** folder and the javascript files that are complied from typescript are stored in **dist** folder. You can configure these in the `tsconfig.json` file.

# API Endpoints

This API has four endpoints for **CRUD** operation on *TODO*. The endpoints are listed as below.

## 1. GET all TODOS

**Endpoint :** [http://localhost:3000](http://localhost:3000)
This is a `GET` request hence no body is required. The response that you will get will look like:

    {
	    "todos": [
		    {
			    "id": "Sat Jul 25 2020 23:28:57 GMT+0530 (India Standard Time)",
			    "text": "Celebrate only after completion!!"
		    }
	    ]
    }

## 2. Add a new TODO

**Endpoint :** [http://localhost:3000/todo](http://localhost:3000/todo)

This is a `POST` request hence body is required. The body must contain JSON data and will have a key value pair where the key will be `text` and value will contain your TODO string. It will look like as follows:

    {
    "text":"Your_TODO_String"
    }

The response after posting a successful TODO will look like this:

    {
    "message": "Added Todo",
	    "todo": {
		    "id": "Sat Jul 25 2020 23:29:18 GMT+0530 (India Standard Time)",
		    "text": "complete"
	    },
    "todos": [
		    {
			    "id": "Sat Jul 25 2020 23:28:57 GMT+0530 (India Standard Time)",
			    "text": "Celebrate only after completion!!"
		    },
		    {
			    "id": "Sat Jul 25 2020 23:29:18 GMT+0530 (India Standard Time)",
			    "text": "complete"
		    }
	    ]
    }
## 3. Update an existing TODO

**Endpoint :** [http://localhost:3000/todoId](http://localhost:3000/todoId)

This is a `PUT` request hence body is required. Also in the endpoint the `todoId` is required to update the todo. The body must contain JSON data and will have a key value pair where the key will be `text` and value will contain your TODO string. It will look like as follows:

    {
    "text":"Your_TODO_String_that_will_replace_the_string_of_existing_todo"
    }

The response after posting a successful TODO will look like this:

    {
    "message": "Updated Todo",
    "todos": [
		    {
			    "id": "Sat Jul 25 2020 23:28:57 GMT+0530 (India Standard Time)",
			    "text": "Celebrate only after completion!!"
		    },
		    {
			    "id": "Sat Jul 25 2020 23:29:18 GMT+0530 (India Standard Time)",
			    "text": "Your_TODO_String_that_will_replace_the_string_of_existing_todo"
		    }
	    ]
    }

## 4. Delete a TODO

**Endpoint :** [http://localhost:3000/todoId](http://localhost:3000/todoId)

This is a `DELETE` request hence no body is required. Also in the endpoint the `todoId` is required to delete the todo.

The response after deleting a TODO will look like this:

    {
    "message": "Deleted Todo",
    "todos": [
		    {
			    "id": "Sat Jul 25 2020 23:28:57 GMT+0530 (India Standard Time)",
			    "text": "Celebrate only after completion!!"
		    }
	    ]
    }


