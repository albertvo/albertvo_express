# CoffeeScript
# Set the Parse.com Application ID and REST API Key.
    Parse.initialize 'wwUbxfKahOApvECcFUHuOCff0xNO07DSlTRgq8i2', 'H3Rdfut0gv7n54KYYvi0Z6l9fbWzsfcfQsc5fXYt'

# Our basic **Todo** model has `content`, `order`, and `done` attributes.
    class Todo extends ParseObject
        parseClassName: 'Todo'

        # Default attributes for the todo.
        defaults:
            content: "empty todo..."
            done: false

        # Ensure that each todo created has `content`.
        initialize: ->
            if !@get("content")
                @set({ "content": @defaults.content })

        # Toggle the `done` state of this todo item.
        toggle: ->
            @save({ done: !@get("done") })

        # Remove this Todo from the Parse.com database and delete its view.
        clear: ->
            @destroy()
            @view.remove()