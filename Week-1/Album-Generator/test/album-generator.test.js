const expect = require('chai').expect;
const AlbumGenerator = require('../AlbumGenerator');

//When class instantiated with paremeters, 
// the values should be saved as part of the class.


//When setArtist is invoked, the ending value 
//should be different from the initial value

describe('AlbumGenerator', () => {
	describe('#instatiation', () => {
		it('ending value should be different from initial value', () => {
			const 
		})
	})
})





// When setSong is invoked, the ending value should be 
// different from the initial value, and 
// should be a string








//When setPlaytime is involked, the ending value 
// should be different from the initial value, 
// and it should be a number


decribe('AlbumGenerator', () => {
	describe('#instatiation', () => {
		it('should set the Album values', () => {
		// EL IT ES LA PRUEBA REAL
			const myAlbum = new AlbumGenerator({
				artist: "Artist",
				song: "Song",
				playtime: 300

			// }); desde const se hace funcion aparte se reusa

			const myAlbum = new AlbumGenerator(params);
			expect(myAlbum.getArtist()).equals(param.artist);
			expect(myAlbum.getSong()).equals(param.song);
			expect(myAlbum.getPlayTime()).equals(param.playTime);
			// expect(myAlbum.toJSON()).to.be.an.object();
		});
	});
});




// Buscar decronstructores