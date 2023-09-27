function skillsMember () {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        Controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}