/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFTs=[]
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_plantname,_planttype,_lifespan,_plantlength) {
    let NFT={
        "plantname":_plantname,
        "planttype":_planttype,
        "lifespan":_lifespan,
        "plantlength":_plantlength,
    }
    NFTs.push(NFT);
    console.log("Minted: "+_plantname);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<NFTs.length;i++){
        console.log("ID: \t\t"+(i+1));
        console.log("\nplantName: \t\t\t"+NFTs[i].plantname);
        console.log("planttype: \t"+NFTs[i].planttype);
        console.log("lifespan: \t"+NFTs[i].lifespan);
        console.log("plantlength: \t\t\t"+NFTs[i].plantlength);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n"+NFTs.length);

}

// call your functions below this line
mintNFT("sunflower","flowering plant","Annual","1.5 to 3.5");
mintNFT("Rose","flowering plant","6 t0 15yrs","2 to 6");
mintNFT("mariegold","flowering plant","few months","1.5 to 2");
listNFTs();
getTotalSupply();