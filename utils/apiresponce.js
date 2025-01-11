class apiresponce {
    constructor(statuscode,message='success',data){
        this.statuscode=statuscode
        this.message=message
        this.data=data
        this.succes=statuscode<500
    }
}