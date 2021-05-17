export class SkillsService{

  private skills: string[] = [ "skill1", "skill2",  "skill3"];

  getData(): string[] {

      return this.skills;
  }
  addData(name: string){

      this.skills.push(name);
  }
}
