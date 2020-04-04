var myBiodata = ()  => {
    var data = {

        
        nama : "Husnul",
        age : "23",
        addres : [
            { Kota :"Medan",
              alamat: "Jl. Bunga Asoka Gg. Prona No. 79",
            }
        ],
        hobbies: ['travelling', 'gaming', 'hiking', 'music'],
        is_married: false,
        
        list_school : [
            {
                name : 'SMK Negeri 2 Medan',
                year_in : 2012,
                year_out : 2015,
                major : 'Teknik Gambar Bangunan'
            },
            
            {
                name : 'SMP Negeri 1 Medan',
                year_in : 2009,
                year_out : 2012,
                major : null
            },
        ],
        Skills : [
            
            {
                skill_name : 'English',
                level : 'Medium'
            },
            
            {
                skill_name : 'Adobe Photoshop',
                level : 'Amateur'
            },
            
            {
                skill_name : 'HTML',
                level : 'Amateur'
            },
            
            {
                skill_name : 'Javascript',
                level : 'Amateur'
            },
            
            {
                skill_name : 'CSS',
                level : 'Amateur'
            },
            
            {
                skill_name : 'C++',
                level : 'Amateur'
            },
            
            
            
        ],
        "interest_in_coding" : true
        
    }
    result = JSON.stringify(data);
    return result;
};
console.log(myBiodata());