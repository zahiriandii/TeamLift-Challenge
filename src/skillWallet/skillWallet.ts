
export class SkillWallet {

    constructor(
        public id: number,
        public normalEmployeeSkills: Map<number,String> = new Map()
    )
    {}
}