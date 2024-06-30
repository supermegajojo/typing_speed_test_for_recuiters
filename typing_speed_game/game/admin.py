from django.contrib import admin
from django.contrib.auth.models import User
from import_export import resources, fields
from import_export.admin import ExportMixin
from .models import Profile #, TypingText

# class TypingTextAdmin(admin.ModelAdmin):
#     list_display = ('title', 'is_default')
#     list_filter = ('is_default',)
#     search_fields = ('title', 'content')
#     actions = ['make_default']

#     def make_default(self, request, queryset):
#         if queryset.count() == 1:
#             TypingText.objects.update(is_default=False)
#             queryset.update(is_default=True)
#             self.message_user(request, "Default text updated.")
#         else:
#             self.message_user(request, "Please select only one text to make default.", level='error')
#     make_default.short_description = "Make selected text default"

# admin.site.register(TypingText, TypingTextAdmin)

class ProfileResource(resources.ModelResource):
    class Meta:
        model = Profile
        fields = ('user__username', 'user__email', 'user__first_name', 'user__last_name', 'company_name') 

class UserResource(resources.ModelResource):
    first_name = fields.Field(attribute='first_name', column_name='First Name')
    last_name = fields.Field(attribute='last_name', column_name='Last Name')
    company_name = fields.Field()

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'date_joined', 'last_login', 'company_name') 

    def dehydrate_company_name(self, user):
        return user.profile.company_name if hasattr(user, 'profile') else ''

class ProfileAdmin(ExportMixin, admin.ModelAdmin):
    resource_class = ProfileResource
    list_display = ('user', 'user_first_name', 'user_last_name', 'company_name')

    def user_first_name(self, obj):
        return obj.user.first_name

    def user_last_name(self, obj):
        return obj.user.last_name

    user_first_name.short_description = 'First Name'
    user_last_name.short_description = 'Last Name'

class UserAdmin(ExportMixin, admin.ModelAdmin):
    resource_class = UserResource

admin.site.unregister(User)
admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)