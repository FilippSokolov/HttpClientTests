client.test("Request executed successfully", function() {
    client.assert(response.status === 200, "Response status is not 200");
});

client.test("Request return correct amount of items", function() {
    const content = JSON.parse(response.body);
    client.assert(content.length === 1, "Response does not contain 1 todo items");
});
