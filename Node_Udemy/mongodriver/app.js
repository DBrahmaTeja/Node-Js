const MongoClient = require('mongodb').MongoClient;

// Connection url
const url = 'mongodb://localhost:27017';
MongoClient.connect(url, function(err, client){
	if(err){
		return console.dir(err);
	}
    const db=client.db('myproject');
	console.log('Connected to mongodb');
    InsertDocument(db, function(){
		client.close();
	});
    /*
    InsertDocuments(db, function(){
		client.close();
	});
    */
});
// Insert Single Doc
const InsertDocument = function(db, callback){
	// Get Collection
	const collection = db.collection('users');
	// Insert Docs
	collection.insertOne({
		name: 'Brad Traversy',
		email: 'brad@test.com'
	}, function(err, result){
		if(err){
			return console.dir(err);
		}
		console.log('Inserted Document');
		console.log(result);
		callback(result);
	});
}

const InsertDocuments = function(db, callback){
	// Get Collection
	const collection = db.collection('users');
	collection.insertMany([
		{
			name:'John Doe',
			email: 'john@test.com'
		},
		{
			name:'Sam Smith',
			email: 'ssmith@test.com'
		},
		{
			name:'Jose Gomez',
			email: 'jgomez@test.com'
		}
	],
	function(err, result){
		if(err){
			return console.dir(err);
		}
		console.log('Inserted '+result+' documents');
		callback(result);
	});
}
