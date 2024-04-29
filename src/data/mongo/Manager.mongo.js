class Manager {
    constructor(Model) {
        this.Model = Model
    }
    async create (data) {
        try {
            const one = await this.Model.create(data)
            return one
        } catch (error) {
            throw error
        }
    }
    async read(filter) {
        try {
            const all = await this.Model.find(filter)
            return all
        } catch (error) {
            throw error
        }
    }
    async readOne(id) {
        try {
            const one = await this.Model.findById({ _id: id})
            return one
        } catch (error) {
            throw error
        }
    }
    async update (id, data) {
        try {
            const one  = await this.Model.findByIdAndUpdate(id, data, { new: true }) // new devuelve el objeto actualizado
            return one
        } catch (error) {
            throw error
        }
    }
    async destroy (id) {
        try {
            const one = await this.Model.findByIdAndDelete(id);
            return one
        } catch (error) {
            throw error
        }
    }
}

export default Manager;