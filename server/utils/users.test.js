const expect = require('expect');

const {Users} = require('./users');

describe('Users', function () {
    var users;


    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Jim',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Bob',
            room: 'Node Course'
        }];
    });

    it('should add new user', function () {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Travis',
            room: 'Example Room Name'
        };

        var sut = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', function () {
        var user = users.removeUser('1');

        expect(user.id).toBe('1');
        expect(users.users.length).toBe(2);
    });

    it('should not remove userList', function () {
        var user = users.removeUser('99');

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', function () {
        var sut = users.getUser('1');
        expect(sut.id).toBe('1');
        expect(sut.name).toBe('Mike');
    });

    it('should not find user', function () {
        var sut = users.getUser('99');
        expect(sut).toNotExist();
    });

    it('should return names for Node Course', function () {
        var userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Mike', 'Bob']);
    });

        it('should return names for React Course', function () {
        var userList = users.getUserList('React Course');
        expect(userList).toEqual(['Jim']);
    });
});