export default {
    api:{
        production:{
            DPTruncate: '' //Поле должно быть, но пусть будет пустым, потом отдельно это тфайл подбрасывать буду
        },
        dev: {
            DPTruncate: 'http://192.168.0.10/dp/registry/truncate'
        }
    }
}