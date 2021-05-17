export class ExperienceService{

  private experience: string[] = [ "exp1", "exp2",  "exp3"];

  getData(): string[] {

      return this.experience;
  }
  addData(name: string){

      this.experience.push(name);
  }
}
