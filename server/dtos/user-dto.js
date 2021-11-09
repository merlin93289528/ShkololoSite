module.exports = class UserDto {
    email;
    id;
    isActivated;
    klass;
    PIB;


    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
        this.klass = model.klass;
        this.PIB = model.PIB;
        
    }
}