export class User {
    username: string;
    first_name: string;
    last_name: string;
    is_active: boolean;
    user_type: number;

    constructor (username: string, first_name: string, last_name: string,
                 is_active: boolean, user_type: number) {

      this.username = username;
      this.first_name = first_name;
      this.last_name = last_name;
      this.is_active = is_active;
      this.user_type = user_type;


    }
}
